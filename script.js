const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  const isNight = theme === 'night';
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isNight));
  themeToggle.setAttribute('aria-label', isNight ? 'Switch to light theme' : 'Switch to night vision theme');
  themeLabel.textContent = isNight ? 'Light theme' : 'Night vision';
  themeColor.content = isNight ? '#000000' : '#f4f1ea';
}

applyTheme(root.dataset.theme);
themeToggle.addEventListener('click', () => {
  const next = root.dataset.theme === 'night' ? 'light' : 'night';
  localStorage.setItem('seestar-theme', next);
  applyTheme(next);
});

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = open;
});
mobileNav.addEventListener('click', event => {
  if (event.target.matches('a')) {
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('figcaption strong');
  const lightboxMeta = lightbox.querySelector('figcaption span');
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      lightboxImage.src = card.dataset.full;
      lightboxImage.alt = card.querySelector('img').alt;
      lightboxTitle.textContent = card.dataset.title;
      lightboxMeta.textContent = card.dataset.meta;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
}

const checks = [...document.querySelectorAll('.checklist input')];
checks.forEach((check, index) => {
  check.checked = localStorage.getItem(`seestar-check-${index}`) === 'true';
  check.addEventListener('change', () => localStorage.setItem(`seestar-check-${index}`, check.checked));
});
const resetChecklist = document.querySelector('.reset-checklist');
if (resetChecklist) {
  resetChecklist.addEventListener('click', () => {
    checks.forEach((check, index) => {
      check.checked = false;
      localStorage.removeItem(`seestar-check-${index}`);
    });
  });
}

const guideLinks = [...document.querySelectorAll('.guide-nav a')];
const guideSections = guideLinks.map(link => document.querySelector(link.hash));
if (guideLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      guideLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-18% 0px -70% 0px' });
  guideSections.forEach(section => section && observer.observe(section));
}
