# Ayuda-memoria para el enrutamiento en Angular

Asumamos que tu aplicación se llama `praktika` y has creado un componente llamado `mi-componente` con la CLI usando `ng generate component mi-componente` (o simplemente `ng g c mi-componente`).

Aquí tienes los pasos detallados para agregar ese nuevo componente al enrutamiento, junto con el porqué de cada uno.

## ⚙️ Pasos para Agregar el Componente al Enrutamiento

### 1. Identificar y Abrir el Módulo de Enrutamiento

El archivo principal donde se define el enrutamiento en una aplicación Angular generada con `ng new` es típicamente `src/app/app-routing.module.ts`.

¿Por qué? Este módulo, generado automáticamente cuando respondes Y (sí) a la pregunta "Would you like to add Angular routing?" durante `ng new`, es el encargado de gestionar las rutas de tu aplicación. Contiene un array llamado `routes` que es donde debemos declarar la nueva ruta.

### 2. Importar el Nuevo Componente

Dentro de `src/app/app-routing.module.ts`, debes agregar la sentencia `import` para tu componente recién creado.

```TypeScript
import { Routes, RouterModule } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component'; // <--

// ... el resto del código
```

¿Por qué? Para poder usar una clase (en este caso, `MiComponenteComponent`) dentro de otro archivo TypeScript, debes importarla explícitamente. El enrutador necesita conocer la referencia a la clase del componente que debe cargar cuando se active una ruta específica.

### 3. Definir la Nueva Ruta

En el array de rutas (`const routes: Routes = [...]`) dentro de `src/app/app-routing.module.ts`, agrega un nuevo objeto de ruta.

````TypeScript
const routes: Routes = [
{ path: 'mi-ruta', component: MiComponenteComponent }, // <-- La nueva ruta
// (Opcional: para redirigir desde la raíz)
// { path: '', redirectTo: '/mi-ruta', pathMatch: 'full' }
];
```
¿Por qué? Una ruta se define como un objeto que requiere al menos dos propiedades clave:

`path`: Es el segmento de URL que el usuario escribirá en el navegador (e.g., http://localhost:4200/mi-ruta).
`component`: Es la clase del componente que Angular debe instanciar y mostrar cuando el path coincida.

### 4. Agregar el router-outlet en el Componente Raíz

Asegúrate de que el componente raíz de tu aplicación, src/app/app.component.html, contenga el placeholder de enrutamiento.

```HTML
<h1>¡Bienvenido a praktika!</h1>
<router-outlet></router-outlet>
```

¿Por qué? El elemento `<router-outlet>` actúa como un marcador de posición. Es el lugar en el DOM donde Angular cargará dinámicamente el componente (e.g., `MiComponenteComponent`) que corresponde a la URL actual. Si no está presente, las rutas funcionarán internamente, pero el componente no se mostrará.

### 5. **Opcional: Agregar un Enlace de Navegación**

Para que el usuario pueda acceder a la nueva ruta fácilmente sin escribir en la barra de direcciones, agrega un enlace en **`src/app/app.component.html`** (o donde sea que quieras tu navegación).

```html
<nav>
    <a routerLink="/mi-ruta">Ir a Mi Componente</a>
</nav>

<router-outlet></router-outlet>
¿Por qué? El atributo routerLink es una directiva de Angular que se prefiere
sobre el href tradicional. Le indica a Angular que debe usar el mecanismo de
enrutamiento interno (navegación single-page application o SPA) para cambiar la
URL y cargar el componente, en lugar de realizar una recarga completa de la
página. 🛠️ Alternativas para la Creación de la Aplicación Mencionaste otras
opciones al crear la aplicación. Para aplicaciones que requieren enrutamiento,
la opción estándar y recomendada es: Bash ng new nombre-app --routing O, si no
usas el flag --routing: Bash ng new nombre-app ? Would you like to add Angular
routing? **Yes** (o Y) ? Which stylesheet format would you like to use?
(Selecciona tu opción) Ambas opciones son equivalentes y garantizan la creación
del archivo app-routing.module.ts (Paso 1), lo que simplifica la configuración
inicial del enrutamiento.
````
