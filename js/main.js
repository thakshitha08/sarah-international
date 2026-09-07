// Sarah International — navigation and small UI helpers
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var dropdown = document.querySelector('.has-dropdown');
  var productsLink = document.querySelector('.products-link');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (productsLink && dropdown) {
    productsLink.addEventListener('click', function (event) {
      if (window.innerWidth <= 980) {
        event.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }

  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (link.classList.contains('products-link') && window.innerWidth <= 980) return;
      if (nav) nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
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
