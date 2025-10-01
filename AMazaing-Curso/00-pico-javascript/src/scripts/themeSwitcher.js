export function initThemeSwitcher() {
    const buttons = document.querySelectorAll('a[data-theme-switcher]');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = btn.getAttribute('data-theme-switcher');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            btn.closest('details')?.removeAttribute('open');
        });
    });
}
