const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const toggleLabel = document.getElementById('theme-toggle-label');
const bar = document.getElementById('progress-bar');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  toggleLabel.textContent = isDark ? 'Light theme' : 'Dark theme';
}

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {}
});

applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  bar.style.width = Math.min(100, Math.max(0, ratio * 100)) + '%';
}

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
