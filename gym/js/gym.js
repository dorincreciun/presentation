/**
 * Gym: filtre abonamente, grid, modal rezervare probă / înscriere.
 */
(function () {
  'use strict';
  var AB = window.ABONAMENTE_MOCK || [];
  var ADDONS = window.ADDONS_GYM_MOCK || [];
  var grid = document.getElementById('abonamente-grid');
  var countEl = document.getElementById('abonamente-count');
  var filterTip = document.getElementById('filter-tip');
  var filterDurata = document.getElementById('filter-durata');
  var filterBuget = document.getElementById('filter-buget');
  var modal = document.getElementById('inscriere-modal');
  var form = document.getElementById('inscriere-form');
  var successEl = document.getElementById('inscriere-success');
  var planNameEl = document.getElementById('inscriere-plan-name');
  var addonsList = document.getElementById('addons-list');
  var totalEl = document.getElementById('inscriere-total');
  var currentPlan = null;

  function filterAbonamente() {
    var tip = (filterTip && filterTip.value) || '';
    var durata = (filterDurata && filterDurata.value) || '';
    var buget = (filterBuget && filterBuget.value) || '';
    return AB.filter(function (a) {
      if (tip && a.tip !== tip) return false;
      if (durata && a.durata !== durata) return false;
      if (buget && a.buget !== buget) return false;
      return true;
    });
  }

  function renderGrid() {
    if (!grid) return;
    var list = filterAbonamente();
    grid.innerHTML = '';
    list.forEach(function (a, i) {
      var card = document.createElement('div');
      card.className = 'abonament-card animate-on-scroll' + (i % 3 === 1 ? ' delay-1' : i % 3 === 2 ? ' delay-2' : '');
      card.innerHTML = '<div class="abonament-card-img" style="background-image: url(\'' + (a.imagine || '') + '\');"></div><div class="abonament-card-content"><h3 class="abonament-card-name">' + (a.nume || '') + '</h3><p class="abonament-card-desc">' + (a.descriere || '') + '</p><div class="abonament-card-footer"><span class="abonament-card-pret">' + (a.pret || 0) + ' RON</span><button type="button" class="btn btn-primary btn-rezerva" data-id="' + (a.id || '') + '">Rezervă probă</button></div></div>';
      var btn = card.querySelector('.btn-rezerva');
      if (btn) btn.addEventListener('click', function () { openInscriere(a); });
      grid.appendChild(card);
    });
    if (countEl) countEl.textContent = 'Afișate ' + list.length + ' abonamente.';
    grid.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      if (typeof IntersectionObserver !== 'undefined') {
        var obs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('is-visible'); }); }, { threshold: 0.1 });
        obs.observe(el);
      }
    });
  }

  function openInscriere(plan) {
    currentPlan = plan;
    if (planNameEl) planNameEl.textContent = plan.nume + ' — ' + plan.pret + ' RON/lună';
    if (form) form.hidden = false;
    if (successEl) successEl.hidden = true;
    updateTotal();
    if (modal) { modal.setAttribute('aria-hidden', 'false'); modal.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    if (addonsList) {
      addonsList.innerHTML = '';
      ADDONS.forEach(function (a) {
        var label = document.createElement('label');
        label.className = 'addon-item';
        label.innerHTML = '<input type="checkbox" name="addon" value="' + a.id + '" data-pret="' + a.pret + '"> <span>' + a.nume + ' (+' + a.pret + ' RON)</span>';
        label.querySelector('input').addEventListener('change', updateTotal);
        addonsList.appendChild(label);
      });
    }
  }

  function closeInscriere() {
    if (modal) { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
    currentPlan = null;
  }

  function updateTotal() {
    if (!totalEl || !currentPlan) return;
    var total = currentPlan.pret || 0;
    var checkboxes = addonsList ? addonsList.querySelectorAll('input:checked') : [];
    checkboxes.forEach(function (cb) { total += parseInt(cb.getAttribute('data-pret') || 0, 10); });
    totalEl.textContent = 'Total: ' + total + ' RON';
  }

  if (filterTip) filterTip.addEventListener('change', renderGrid);
  if (filterDurata) filterDurata.addEventListener('change', renderGrid);
  if (filterBuget) filterBuget.addEventListener('change', renderGrid);
  document.getElementById('inscriere-close') && document.getElementById('inscriere-close').addEventListener('click', closeInscriere);
  document.getElementById('inscriere-backdrop') && document.getElementById('inscriere-backdrop').addEventListener('click', closeInscriere);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeInscriere(); });
  if (form) form.addEventListener('submit', function (e) { e.preventDefault(); form.hidden = true; if (successEl) successEl.hidden = false; });
  renderGrid();
})();
