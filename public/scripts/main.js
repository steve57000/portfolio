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
let isThemeAnimating = false;
const paintEnterFallbackMs = 980;
const paintExitFallbackMs = 480;

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
  const drips = [
    ['6%', '4.4rem', '10.5rem', '14.2rem', '70ms', '760ms'],
    ['18%', '2.7rem', '7.2rem', '9.6rem', '210ms', '680ms'],
    ['31%', '6.2rem', '13rem', '17.4rem', '120ms', '860ms'],
    ['47%', '3.4rem', '9rem', '12rem', '260ms', '720ms'],
    ['59%', '5.1rem', '11.8rem', '15.8rem', '40ms', '820ms'],
    ['74%', '2.9rem', '8.5rem', '11.4rem', '300ms', '700ms'],
    ['88%', '6.7rem', '12.8rem', '17rem', '160ms', '880ms'],
    ['97%', '3.8rem', '10rem', '13.4rem', '240ms', '760ms'],
  ];

  drips.forEach(([x, width, height, maxHeight, delay, speed]) => {
    const drip = document.createElement('span');
    drip.style.setProperty('--drip-x', x);
    drip.style.setProperty('--drip-width', `clamp(${width}, 9vw, ${height})`);
    drip.style.setProperty('--drip-height', `clamp(${height}, 18vw, ${maxHeight})`);
    drip.style.setProperty('--drip-delay', delay);
    drip.style.setProperty('--drip-speed', speed);
    paint.appendChild(drip);
  });
  document.body.appendChild(paint);
  return paint;
};

const waitForAnimation = (element, animationName, fallbackMs) => new Promise((resolve) => {
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    element.removeEventListener('animationend', onAnimationEnd);
    window.clearTimeout(fallback);
    resolve();
  };
  const onAnimationEnd = (event) => {
    if (event.target === element && event.animationName === animationName) finish();
  };
  const fallback = window.setTimeout(finish, fallbackMs);
  element.addEventListener('animationend', onAnimationEnd);
});

const animateThemeChange = async (targetTheme) => {
  if (isThemeAnimating || targetTheme === getTheme()) return;

  if (reducedMotionQuery.matches) {
    applyTheme(targetTheme);
    storeTheme(targetTheme);
    return;
  }

  isThemeAnimating = true;
  const paint = createPaintOverlay(targetTheme);

  try {
    await waitForAnimation(paint, 'paint-drop', paintEnterFallbackMs);
    applyTheme(targetTheme);
    storeTheme(targetTheme);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    paint.classList.add('is-exiting');
    await waitForAnimation(paint, 'paint-exit', paintExitFallbackMs);
  } finally {
    paint.remove();
    isThemeAnimating = false;
  }
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
