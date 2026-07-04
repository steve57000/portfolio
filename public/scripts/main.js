const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open', !expanded);
});

const projectGrid = document.querySelector('[data-project-grid]');
const filterButtons = document.querySelectorAll('[data-filter]');
const emptyState = document.querySelector('[data-project-empty]');
const catalogCards = projectGrid ? projectGrid.querySelectorAll('[data-project-card]') : [];

const applyProjectFilter = (filter) => {
  let visibleCount = 0;

  catalogCards.forEach((card) => {
    const shouldShow = filter === 'all' || card.dataset.category === filter;
    card.hidden = !shouldShow;
    card.classList.toggle('is-filtered-out', !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  projectGrid?.querySelectorAll('[data-project-group]').forEach((group) => {
    const visibleCards = group.querySelectorAll('[data-project-card]:not([hidden])').length;
    group.hidden = visibleCards === 0;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
};

filterButtons.forEach((button) => {
  button.setAttribute('aria-pressed', button.classList.contains('is-active') ? 'true' : 'false');

  button.addEventListener('click', () => {
    const filter = button.dataset.filter ?? 'all';

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });

    applyProjectFilter(filter);
  });
});

const revealElements = document.querySelectorAll('[data-reveal]');
const revealElement = (entry, observer) => {
  if (!entry.isIntersecting) return;
  entry.target.classList.add('is-revealed');
  observer.unobserve(entry.target);
};

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => revealElement(entry, observer));
  }, { rootMargin: '0px 0px -2% 0px', threshold: 0.04 });

  const earlyRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => revealElement(entry, observer));
  }, { rootMargin: '0px 0px 8% 0px', threshold: 0.01 });

  revealElements.forEach((element) => {
    const observer = element.dataset.reveal === 'early' ? earlyRevealObserver : revealObserver;
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add('is-revealed'));
}

document.querySelectorAll('[data-project-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(`project-${button.dataset.projectOpen}`);
    if (dialog?.showModal) dialog.showModal();
  });
});

document.querySelectorAll('.project-dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
