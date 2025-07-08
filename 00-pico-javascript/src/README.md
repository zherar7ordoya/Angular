# Proyecto modular con Vite + Pico.css

Este proyecto está construido con [Vite](https://vitejs.dev/) y usa [Pico.css](https://picocss.com/) como framework de estilos. El objetivo es mantener una arquitectura comprensible, modular y escalable.

## 📁 Estructura del proyecto

- `src/components/`: Componentes HTML (header, footer, etc.)
- `src/scripts/`: JavaScript modularizado
- `src/styles/`: Estilos propios si hace falta
- `src/main.js`: Punto de entrada del JS
- `src/index.html`: Página principal
- `public/`: Archivos estáticos (imágenes, íconos…)

## 🚀 Comandos

- `npm install`: Instala las dependencias
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera una versión optimizada
- `npm run preview`: Previsualiza la versión final

## 🧩 Cómo funciona

En `main.js` se cargan dinámicamente componentes como `header.html` o `footer.html` dentro de la estructura principal. Esto permite mantener el código limpio y reutilizable sin necesidad de frameworks pesados.

## 🧠 Notas

- Los componentes deben estar en rutas accesibles por el navegador (por eso están en `src/components` y usamos rutas absolutas tipo `/src/components/header.html`).
- Vite sirve directamente desde `/src`.

---

Y eso es todo 💕

