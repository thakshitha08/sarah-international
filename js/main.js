document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const dropdown = document.querySelector('.has-dropdown');
  const productsButton = document.querySelector('.products-link');

  function closeDropdown() {
    if (!dropdown || !productsButton) return;
    dropdown.classList.remove('open');
    productsButton.setAttribute('aria-expanded', 'false');
  }

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    closeDropdown();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function (event) {
      event.stopPropagation();
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) closeDropdown();
    });
  }

  if (productsButton && dropdown) {
    productsButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      const open = dropdown.classList.toggle('open');
      productsButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) closeDropdown();
    });
  }

  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeNav();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 860) {
      closeNav();
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
