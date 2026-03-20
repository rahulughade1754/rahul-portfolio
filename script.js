
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Toggle Theme';
toggleButton.className = 'theme-toggle';
document.body.appendChild(toggleButton);

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
}

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setTheme(!isDark);
});

document.addEventListener('DOMContentLoaded', () => {
  const dark = localStorage.getItem('darkMode') === 'true';
  setTheme(dark);
});
