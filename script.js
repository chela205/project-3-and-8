// Responsive navigation and a front-end demonstration of form validation.
document.querySelectorAll(".menu-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nav = document.getElementById(button.getAttribute("aria-controls"));
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    button.textContent = isOpen ? "×" : "☰";
  });
});

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    document.getElementById("form-status").textContent =
      "Thank you. The form has been completed successfully (demonstration only; no message was sent).";
    contactForm.reset();
  });
}