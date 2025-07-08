import { initThemeSwitcher } from './themeSwitcher.js';

export async function loadComponent(selector, path, callback) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
  if (callback) callback();
}

export function loadAllComponents() {
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
