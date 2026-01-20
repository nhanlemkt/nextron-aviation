// Nextron Aviation - simple UI helpers

// Contact form demo (no backend)
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Thanks — your message has been received (demo).";
    form.reset();
  });
})();

// Mobile nav toggle (only used if you have a .nav-toggle button in HTML)
(function () {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
})();
