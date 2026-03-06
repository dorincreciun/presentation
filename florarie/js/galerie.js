/**
 * Galerie: randare flori din date mock, filtrare după categorie, modal detalii.
 */

(function () {
  'use strict';

  var FLORI = window.FLORI_MOCK || [];
  var grid = document.getElementById('gallery-grid');
  var countEl = document.getElementById('gallery-count');
  var modal = document.getElementById('flower-modal');
  var modalBody = document.getElementById('modal-body');
  var modalClose = document.querySelector('.modal-close');
  var modalBackdrop = document.querySelector('.modal-backdrop');
  var filterBtns = document.querySelectorAll('.filter-btn');

  function renderGallery(filter) {
    if (!grid) return;
    grid.innerHTML = '';
    var filtered = filter === 'toate' || !filter
      ? FLORI
      : FLORI.filter(function (f) { return f.categorie === filter; });

    filtered.forEach(function (f, i) {
      var item = document.createElement('div');
      item.className = 'gallery-item animate-on-scroll' + (i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : '');
      item.dataset.categorie = f.categorie;
      item.innerHTML =
        '<div class="gallery-item-img" style="background-image: url(\'' + f.imagine + '\');"></div>' +
        '<div class="gallery-item-content">' +
          '<span class="gallery-item-cat">' + (f.categorie || '') + '</span>' +
          '<h3>' + (f.nume || '') + '</h3>' +
        '</div>';
      item.addEventListener('click', function () { openModal(f); });
      grid.appendChild(item);
    });

    if (countEl) {
      countEl.textContent = 'Afișate ' + filtered.length + ' din ' + FLORI.length + ' flori.';
    }

    // Re-observă elementele noi pentru animație
    setTimeout(function () {
      document.querySelectorAll('#gallery-grid .animate-on-scroll').forEach(function (el) {
        if (typeof IntersectionObserver !== 'undefined') {
          var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
              if (e.isIntersecting) e.target.classList.add('is-visible');
            });
          }, { threshold: 0.1 });
          obs.observe(el);
        }
      });
    }, 50);
  }

  function openModal(f) {
    if (!modal || !modalBody) return;
    modalBody.innerHTML =
      '<div class="modal-img" style="background-image: url(\'' + (f.imagine || '') + '\');"></div>' +
      '<span class="modal-cat">' + (f.categorie || '') + '</span>' +
      '<h2 class="modal-title">' + (f.nume || '') + '</h2>' +
      '<p>' + (f.descriere || f.descriereScurta || '') + '</p>' +
      '<div class="modal-meta">' +
        (f.sezon ? 'Sezon: ' + f.sezon + ' · ' : '') +
        (f.inaltime ? 'Înălțime: ' + f.inaltime : '') +
      '</div>';
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
  });

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      renderGallery(btn.getAttribute('data-filter'));
    });
  });

  renderGallery('toate');
})();
