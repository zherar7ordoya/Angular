// File path: src/scripts/componentLoader.ts

import { initThemeSwitcher } from './themeSwitcher.ts';

export function loadAllComponents(): void {
    // El único que necesita un callback es el header
    loadComponent('#header', '/src/components/header.html', () => {
        initThemeSwitcher();
    });

    // El resto no necesita lógica adicional por ahora
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
    loadComponent('#footer', '/src/components/footer.html');
    loadComponent('#example', '/src/components/example.html');
}

async function loadComponent(
    selector: string,
    path: string,
    callback?: () => void): Promise<void> {

    try {
        const res = await fetch(path);
        const html = await res.text();
        const container = document.querySelector(selector);

        if (container) {
            container.innerHTML = html;
            if (callback) callback();
        }
        else {
            console.warn(`Selector ${selector} not found in the document.`);
        }
    }
    catch (error) {
        console.error(`Error loading component from ${path}:`, error);
    }
}