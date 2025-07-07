import '@picocss/pico/css/pico.min.css';

async function loadComponent(selector, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

loadComponent('#header', '/src/components/header.html');
loadComponent('#preview', '/src/components/preview.html');
loadComponent('#footer', '/src/components/footer.html');
