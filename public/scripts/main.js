const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open', !expanded);
});

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = 'portfolio-theme';
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const getStoredTheme = () => {
  try { return localStorage.getItem(themeStorageKey); } catch { return null; }
};

const storeTheme = (theme) => {
  try { localStorage.setItem(themeStorageKey, theme); } catch {}
};

const getSystemTheme = () => systemDarkQuery.matches ? 'dark' : 'light';
const getTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

const setThemeMeta = (theme) => {
  themeMeta?.setAttribute('content', theme === 'dark' ? '#0b1110' : '#f5f1e8');
};

const syncThemeToggle = () => {
  if (!themeToggle) return;
  const dark = getTheme() === 'dark';
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Activer le mode clair' : 'Activer le mode sombre');
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  setThemeMeta(theme);
  syncThemeToggle();
};

applyTheme(getStoredTheme() === 'dark' || getStoredTheme() === 'light' ? getStoredTheme() : getTheme());

systemDarkQuery.addEventListener?.('change', () => {
  if (!getStoredTheme()) applyTheme(getSystemTheme());
});

const createPaintOverlay = (targetTheme) => {
  const paint = document.createElement('div');
  paint.className = 'theme-paint';
  paint.dataset.themePaint = targetTheme;
  paint.setAttribute('aria-hidden', 'true');
  for (let index = 0; index < 7; index += 1) {
    const drip = document.createElement('span');
    drip.style.setProperty('--drip-index', String(index));
    paint.appendChild(drip);
  }
  document.body.appendChild(paint);
  return paint;
};

const animateThemeChange = (targetTheme) => {
  if (reducedMotionQuery.matches) {
    applyTheme(targetTheme);
    storeTheme(targetTheme);
    return;
  }

  const paint = createPaintOverlay(targetTheme);
  window.setTimeout(() => {
    applyTheme(targetTheme);
    storeTheme(targetTheme);
    paint.classList.add('is-finished');
  }, 420);
  paint.addEventListener('animationend', (event) => {
    if (event.animationName === 'paint-exit') paint.remove();
  });
  window.setTimeout(() => paint.remove(), 1300);
};

themeToggle?.addEventListener('click', () => {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
  animateThemeChange(nextTheme);
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
