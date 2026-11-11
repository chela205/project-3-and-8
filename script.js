document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    document.querySelector('#form-message').textContent =
      'Thank you. This demonstration form has been completed successfully; it does not send or store messages.';
    form.reset();
  });
});
