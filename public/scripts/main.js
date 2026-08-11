const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

const closeNavigation = () => {
  navToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
};

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('is-open', !expanded);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
    closeNavigation();
    navToggle?.focus();
  }
});
window.matchMedia('(min-width: 801px)').addEventListener?.('change', (event) => {
  if (event.matches) closeNavigation();
});

const themeToggle = document.querySelector('[data-theme-toggle]');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = 'portfolio-theme';
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

themeToggle?.addEventListener('click', () => {
  const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  storeTheme(nextTheme);
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

let activeDialogTrigger = null;

document.querySelectorAll('[data-project-open]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(`project-${button.dataset.projectOpen}`);
    if (dialog?.showModal) {
      activeDialogTrigger = button;
      dialog.showModal();
      dialog.querySelector('.dialog-close')?.focus();
    }
  });
});

document.querySelectorAll('.project-dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (activeDialogTrigger instanceof HTMLElement) activeDialogTrigger.focus();
    activeDialogTrigger = null;
  });
});
