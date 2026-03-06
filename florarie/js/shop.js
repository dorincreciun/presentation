/**
 * Shop: filtre buchete, randare grid, modal comandă.
 */
(function () {
  'use strict';
  var BUCHETE = window.BUCHETE_MOCK || [];
  var ADDONS = window.ADDONS_MOCK || [];
  var MESAJE = window.MESAJE_SUGERATE || [];
  var grid = document.getElementById('buchete-grid');
  var countEl = document.getElementById('buchete-count');
  var filterOcazie = document.getElementById('filter-ocazie');
  var filterTip = document.getElementById('filter-tip');
  var filterBuget = document.getElementById('filter-buget');
  var modal = document.getElementById('checkout-modal');
  var checkoutForm = document.getElementById('checkout-form');
  var checkoutSuccess = document.getElementById('checkout-success');
  var checkoutBouquetName = document.getElementById('checkout-bouquet-name');
  var checkoutTotal = document.getElementById('checkout-total');
  var mesajSugerat = document.getElementById('checkout-mesaj-sugerat');
  var mesajTextarea = document.getElementById('checkout-mesaj');
  var addonsList = document.getElementById('addons-list');
  var currentBouquet = null;

  function filterBuchete() {
    var ocazie = (filterOcazie && filterOcazie.value) || '';
    var tip = (filterTip && filterTip.value) || '';
    var buget = (filterBuget && filterBuget.value) || '';
    return BUCHETE.filter(function (b) {
      if (ocazie && b.ocazie && b.ocazie.indexOf(ocazie) === -1) return false;
      if (tip && b.tip !== tip) return false;
      if (buget && b.buget !== buget) return false;
      return true;
    });
  }

  function renderGrid() {
    if (!grid) return;
    var list = filterBuchete();
    grid.innerHTML = '';
    list.forEach(function (b, i) {
      var card = document.createElement('div');
      card.className = 'buchet-card animate-on-scroll' + (i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : '');
      card.innerHTML = '<div class="buchet-card-img" style="background-image: url(\'' + (b.imagine || '') + '\');"></div><div class="buchet-card-content"><h3 class="buchet-card-name">' + (b.nume || '') + '</h3><p class="buchet-card-desc">' + (b.descriere || '') + '</p><div class="buchet-card-footer"><span class="buchet-card-pret">' + (b.pret || 0) + ' RON</span><button type="button" class="btn btn-primary btn-trimite" data-id="' + (b.id || '') + '">Trimite Cadou</button></div></div>';
      var btn = card.querySelector('.btn-trimite');
      if (btn) btn.addEventListener('click', function () { openCheckout(b); });
      grid.appendChild(card);
    });
    if (countEl) countEl.textContent = 'Afișate ' + list.length + ' buchete.';
    var cards = grid.querySelectorAll('.animate-on-scroll');
    cards.forEach(function (el) {
      if (typeof IntersectionObserver !== 'undefined') {
        var obs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('is-visible'); }); }, { threshold: 0.1 });
        obs.observe(el);
      }
    });
  }

  function openCheckout(bouquet) {
    currentBouquet = bouquet;
    if (checkoutBouquetName) checkoutBouquetName.textContent = bouquet.nume + ' — ' + bouquet.pret + ' RON';
    if (checkoutForm) checkoutForm.hidden = false;
    if (checkoutSuccess) checkoutSuccess.hidden = true;
    updateCheckoutTotal();
    if (modal) { modal.setAttribute('aria-hidden', 'false'); modal.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    if (mesajSugerat) {
      mesajSugerat.innerHTML = '<option value="">— Alege un mesaj sugerat sau scrie mai jos —</option>';
      MESAJE.forEach(function (m) { var opt = document.createElement('option'); opt.value = m; opt.textContent = m; mesajSugerat.appendChild(opt); });
    }
    if (addonsList) {
      addonsList.innerHTML = '';
      ADDONS.forEach(function (a) {
        var label = document.createElement('label');
        label.className = 'addon-item';
        label.innerHTML = '<input type="checkbox" name="addon" value="' + a.id + '" data-pret="' + a.pret + '"> <span>' + a.nume + ' (+' + a.pret + ' RON)</span>';
        label.querySelector('input').addEventListener('change', updateCheckoutTotal);
        addonsList.appendChild(label);
      });
    }
    var dateInput = document.getElementById('checkout-data');
    if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);
  }

  function closeCheckout() {
    if (modal) { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
    currentBouquet = null;
  }

  function updateCheckoutTotal() {
    if (!checkoutTotal || !currentBouquet) return;
    var total = currentBouquet.pret || 0;
    var checkboxes = addonsList ? addonsList.querySelectorAll('input:checked') : [];
    checkboxes.forEach(function (cb) { total += parseInt(cb.getAttribute('data-pret') || 0, 10); });
    checkoutTotal.textContent = 'Total: ' + total + ' RON';
  }

  if (filterOcazie) filterOcazie.addEventListener('change', renderGrid);
  if (filterTip) filterTip.addEventListener('change', renderGrid);
  if (filterBuget) filterBuget.addEventListener('change', renderGrid);
  document.getElementById('checkout-close') && document.getElementById('checkout-close').addEventListener('click', closeCheckout);
  document.getElementById('checkout-backdrop') && document.getElementById('checkout-backdrop').addEventListener('click', closeCheckout);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeCheckout(); });
  if (mesajSugerat && mesajTextarea) mesajSugerat.addEventListener('change', function () { if (this.value) mesajTextarea.value = this.value; });
  if (checkoutForm) checkoutForm.addEventListener('submit', function (e) { e.preventDefault(); checkoutForm.hidden = true; if (checkoutSuccess) checkoutSuccess.hidden = false; });
  renderGrid();
})();
