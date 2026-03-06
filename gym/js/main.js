/**
 * Script comun: navigare, animații la scroll.
 */
(function () {
  'use strict';
  var header = document.querySelector('.mast');
  if (header) {
    function onScroll() {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var toggle = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav-list');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.12 });
  document.querySelectorAll('.animate-on-scroll').forEach(function (el) { observer.observe(el); });
})();
