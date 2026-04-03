const navToggle = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((item) => observer.observe(item));

const quotesAfterAbout = [
  {
    text: "Great businesses are not built overnight; they are built with the right guidance.",
    author: "",
  },
  {
    text: "Risk comes from not knowing what you're doing.",
    author: "Warren Buffett",
  },
  {
    text: "It's pointless to set goals if you are not going to try to hit them.",
    author: "Don Connelly",
  },
  {
    text: "Whether you think you can, or you think you can't—you're right.",
    author: "Henry Ford",
  },
  {
    text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
    author: "Bill Gates",
  },
  {
    text: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten.",
    author: "Bill Gates",
  },
];

const quotesAfterServices = [
  {
    text: "You can make EXCUSES and earn SYMPATHY, OR you can make MONEY and earn ADMIRATION. The choice is always yours…",
    author: "Manoj Arora",
  },
  {
    text: "There are only two kinds of people on this Earth: one is successful who took the risk, and the other who did not take the risk.",
    author: "Dr. Velumani",
  },
  {
    text: "Beware of little expenses; a small leak will sink a great ship.",
    author: "Benjamin Franklin",
  },
  {
    text: "It's not how much money you make, but how much money you keep.",
    author: "Robert Kiyosaki",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Coming together is a beginning. Keeping together is Progress. Working together is success.",
    author: "Henry Ford",
  },
];

function showRandomQuote(textEl, authorEl, quotes, lastIndex) {
  if (!textEl || !authorEl || quotes.length === 0) return lastIndex;
  let i = Math.floor(Math.random() * quotes.length);
  if (quotes.length > 1) {
    while (i === lastIndex) {
      i = Math.floor(Math.random() * quotes.length);
    }
  }
  const q = quotes[i];
  textEl.textContent = q.text;
  authorEl.textContent = q.author ? `— ${q.author}` : "";
  return i;
}

function startQuoteRotation(textId, authorId, quotes) {
  const textEl = document.getElementById(textId);
  const authorEl = document.getElementById(authorId);
  if (!textEl || !authorEl) return;
  let lastIndex = showRandomQuote(textEl, authorEl, quotes, -1);
  setInterval(() => {
    lastIndex = showRandomQuote(textEl, authorEl, quotes, lastIndex);
  }, 10000);
}

startQuoteRotation("quote-strip-about-text", "quote-strip-about-author", quotesAfterAbout);
startQuoteRotation("quote-strip-services-text", "quote-strip-services-author", quotesAfterServices);

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = contactForm.querySelector("button[type='submit']");
    const status = document.getElementById("contact-form-status");
    if (!button) return;
    const originalText = button.textContent;
    if (status) {
      status.textContent = "";
    }
    button.textContent = "Sending...";
    button.disabled = true;
    try {
      const body = new URLSearchParams(new FormData(contactForm));
      const response = await fetch(contactForm.action, {
        method: "POST",
        body,
      });
      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }
      button.textContent = "Submitted";
      if (status) {
        status.textContent = "Your enquiry was submitted successfully.";
      }
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        contactForm.reset();
      }, 1500);
    } catch (_error) {
      button.textContent = "Try again";
      if (status) {
        status.textContent = "Unable to submit enquiry. Please try again.";
      }
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1500);
    }
  });
}
