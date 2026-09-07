// Sarah International — site scripts
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var productMenu = document.querySelector('.nav-product-menu');
  var productToggle = document.querySelector('.nav-product-toggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    if (productMenu && productToggle) {
      productToggle.addEventListener('click', function (event) {
        event.preventDefault();
        var isOpen = productMenu.classList.toggle('is-open');
        productToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        if (productMenu && productToggle) {
          productMenu.classList.remove('is-open');
          productToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (productMenu && !productMenu.contains(event.target)) {
        productMenu.classList.remove('is-open');
        if (productToggle) productToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && productMenu && productToggle) {
        productMenu.classList.remove('is-open');
        productToggle.setAttribute('aria-expanded', 'false');
        productToggle.focus();
      }
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
