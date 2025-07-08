import '@picocss/pico/css/pico.min.css';
import './styles/background.css';
import './styles/layout.css';

async function loadComponent(selector, path, callback) {
    const res = await fetch(path);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;

    if (callback) callback();
}

// Header component
loadComponent('#header', '/src/components/header.html', () => {
    document.querySelectorAll('[data-theme-switcher]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = el.getAttribute('data-theme-switcher');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            // Cerrar el dropdown (el <details>)
            el.closest('details')?.removeAttribute('open');
        });
    });

    // Set initial theme based on localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});

// Main content components
loadComponent('#preview', '/src/components/preview.html');
loadComponent('#typography', '/src/components/typography.html');
loadComponent('#buttons', '/src/components/buttons.html');
loadComponent('#form', '/src/components/form.html');
loadComponent('#tables', '/src/components/tables.html');
loadComponent('#modal', '/src/components/modal.html');
loadComponent('#accordions', '/src/components/accordions.html');
loadComponent('#article', '/src/components/article.html');
loadComponent('#group', '/src/components/group.html');
loadComponent('#progress', '/src/components/progress.html');
loadComponent('#loading', '/src/components/loading.html');
// Footer component
loadComponent('#footer', '/src/components/footer.html');
// Modal example
loadComponent('#example', '/src/components/example.html');
