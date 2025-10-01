// File path: src/scripts/themeSwitcher.ts

export function initThemeSwitcher(): void {
    // Define buttons as a NodeList of HTMLAnchorElements since they select <a> elements.
    const buttons: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[data-theme-switcher]');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    buttons.forEach((btn) => {
        // Ensure the button has the correct data attribute (MouseEvent).
        btn.addEventListener('click', (e: MouseEvent) => {
            e.preventDefault();
            const theme = btn.getAttribute('data-theme-switcher');

            // Validate theme value before applying it.
            if (theme) {
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
            }

            // "closest" is forced to be HTMLDetailsElement or null to avoid TypeScript errors.
            (btn.closest('details') as HTMLDetailsElement | null)?.removeAttribute('open');
        });
    });
}
