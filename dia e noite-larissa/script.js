const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle');
const themeSystem = localStorage.getItem('themeSystem') || 'light';

btnDarkModeToggle.addEventListener('click', () => {
  let oldTheme = localStorage.getItem('themeSystem') || 'light';
  let newTheme = oldTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('themeSystem', newTheme);
  defineCurrentTheme(newTheme);
});

function defineCurrentTheme(theme) {
  const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="6"/></svg>`;
  const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><circle cx="8" cy="8" r="4"/></svg>`;

  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "light") {
    btnDarkModeToggle.innerHTML = darkSvg;
  } else {
    btnDarkModeToggle.innerHTML = lightSvg;
  }
}

defineCurrentTheme(themeSystem);
