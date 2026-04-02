(function () {
  const MD_PATH = "assets/Web-Content.md";

  const SECTION_PATTERNS = [
    ["accounting", /^\s*1\.\s+\*\*Accounting/i],
    ["audit", /^\s*2\.\s+\*\*Audit/i],
    ["incorporation", /\*\*3\.Company/i],
    ["virtual-cfo", /\*\*4\.VIRTUAL CFO/i],
    ["gst-review", /\*\*5\.Goods & Service Tax Review Services/i],
    ["gst-compliance", /\*\*6\.Goods & Service Tax.*Regular Compliance/i],
    ["income-tax", /\*\*7\\\.\s*Income Tax Services/i],
    ["payroll", /\*\*8\\\.\s*Payroll/i],
    ["secretarial", /\*\*9\.Company Secretarial/i],
    ["allied", /\*\*10\.Allied/i],
  ];

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inlineFormat(s) {
    let t = escapeHtml(s);
    t = t.replace(/\\([\\`*_{}[\]()#+.!-])/g, "$1");
    t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return t;
  }

  function parseTable(rows) {
    const parseRow = (row) =>
      row
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim());
    const dataRows = rows.filter((r) => {
      const x = r.replace(/\s/g, "");
      return !/^\|[\-\s:|]+\|$/.test(x) && x.length > 2;
    });
    if (dataRows.length < 2) return "";
    const head = parseRow(dataRows[0]);
    const body = dataRows.slice(1);
    let html =
      '<div class="service-modal-table-wrap"><table class="service-modal-table"><thead><tr>';
    head.forEach((c) => {
      const plain = c.replace(/\*\*/g, "").trim();
      html += `<th>${escapeHtml(plain)}</th>`;
    });
    html += "</tr></thead><tbody>";
    body.forEach((row) => {
      const cells = parseRow(row);
      html += "<tr>";
      cells.forEach((c, i) => {
        html += `<td>${inlineFormat(c)}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody></table></div>";
    return html;
  }

  function markdownSectionToHtml(raw) {
    const lines = raw.split(/\r?\n/);
    let i = 0;
    const parts = [];

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trimEnd();
      const t = trimmed.trim();
      if (!t) {
        i++;
        continue;
      }

      if (t.startsWith("|") && t.includes("|")) {
        const block = [];
        while (i < lines.length) {
          const L = lines[i].trim();
          if (!L.startsWith("|")) break;
          block.push(L);
          i++;
        }
        parts.push(parseTable(block));
        continue;
      }

      if (/^\s*\*\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*\*\s+/.test(lines[i])) {
          items.push(inlineFormat(lines[i].replace(/^\s*\*\s+/, "").trim()));
          i++;
        }
        parts.push("<ul>" + items.map((x) => `<li>${x}</li>`).join("") + "</ul>");
        continue;
      }

      if (/^\s*\d+[\).]\s/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*\d+[\).]\s/.test(lines[i])) {
          items.push(inlineFormat(lines[i].replace(/^\s*\d+[\).]\s+/, "").trim()));
          i++;
        }
        parts.push("<ol>" + items.map((x) => `<li>${x}</li>`).join("") + "</ol>");
        continue;
      }

      if (/^\*\*[^*]+\*\*:\s*$/.test(t) || (/^\*\*[^*]+\*\*\s*$/.test(t) && t.length < 140)) {
        const inner = t.replace(/^\*\*|\*\*$/g, "").replace(/:\s*$/, "");
        parts.push(`<h4 class="service-modal-h4">${escapeHtml(inner)}</h4>`);
        i++;
        continue;
      }

      const para = [];
      while (i < lines.length) {
        const L = lines[i];
        const lt = L.trim();
        if (!lt) break;
        if (lt.startsWith("|")) break;
        if (/^\s*\*\s+/.test(L)) break;
        if (/^\s*\d+[\).]\s/.test(L)) break;
        if (/^\*\*[^*]+\*\*:\s*$/.test(lt)) break;
        if (/^\*\*[^*]+\*\*\s*$/.test(lt) && lt.length < 140) break;
        para.push(L.trimEnd().trim());
        i++;
      }
      if (para.length) {
        const text = para.join(" ");
        if (text) parts.push(`<p>${inlineFormat(text)}</p>`);
      }
    }

    return parts.join("");
  }

  function splitMarkdownByService(md) {
    const lines = md.split(/\r?\n/);
    const starts = {};
    for (const [key, re] of SECTION_PATTERNS) {
      const idx = lines.findIndex((line) => re.test(line));
      starts[key] = idx;
    }
    const ordered = SECTION_PATTERNS.map(([k]) => [k, starts[k]]).filter(([, idx]) => idx >= 0);
    ordered.sort((a, b) => a[1] - b[1]);
    const map = {};
    for (let j = 0; j < ordered.length; j++) {
      const [key, start] = ordered[j];
      const end = j + 1 < ordered.length ? ordered[j + 1][1] : lines.length;
      const slice = lines.slice(start + 1, end).join("\n");
      map[key] = markdownSectionToHtml(slice);
    }
    return map;
  }

  let cache = null;
  let loadPromise = null;

  function loadFromMarkdown() {
    if (cache) return Promise.resolve(cache);
    if (loadPromise) return loadPromise;
    loadPromise = fetch(MD_PATH)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((text) => {
        cache = splitMarkdownByService(text);
        return cache;
      })
      .catch(() => null);
    return loadPromise;
  }

  window.__loadServiceModalHtml = async function (key) {
    const fromMd = await loadFromMarkdown();
    if (fromMd && fromMd[key]) {
      return `<div class="service-modal-prose service-modal-prose--md">${fromMd[key]}</div>`;
    }
    const fallback = window.__SERVICE_MODAL_HTML && window.__SERVICE_MODAL_HTML[key];
    if (fallback) {
      return fallback.includes("service-modal-prose--md")
        ? fallback
        : fallback.replace(
            'class="service-modal-prose"',
            'class="service-modal-prose service-modal-prose--md"'
          );
    }
    return '<div class="service-modal-prose"><p>Content could not be loaded.</p></div>';
  };
})();
