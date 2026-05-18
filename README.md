# MatiasUI

![Version](https://img.shields.io/badge/version-1.1.0-crimson)
![License](https://img.shields.io/badge/license-MIT-black)
![Framework](https://img.shields.io/badge/framework-agnostic-blue)

MatiasUI es una libreria de estilos web framework-agnostic con identidad crimson. Funciona con HTML plano, Astro, Laravel, Django, Rails, PHP, Express, React, Vue, Svelte o cualquier sistema que pueda cargar un CSS y un JS.

## Instalacion rapida

### Local

```html
<link rel="stylesheet" href="/dist/matias-ui.css">
<script defer src="/dist/matias-ui.js"></script>
```

### CDN

Cuando publiques el paquete, podes usar un CDN npm:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/matias-ui@1/dist/matias-ui.css">
<script defer src="https://cdn.jsdelivr.net/npm/matias-ui@1/dist/matias-ui.js"></script>
```

Tambien funciona con un CDN propio:

```html
<link rel="stylesheet" href="https://tu-dominio.com/matias-ui/dist/matias-ui.css">
<script defer src="https://tu-dominio.com/matias-ui/dist/matias-ui.js"></script>
```

## Uso minimo

```html
<body class="mui-body">
  <section class="mui-hero">
    <div class="mui-container mui-split">
      <div class="mui-stack">
        <span class="mui-badge">Crimson UI</span>
        <h1 class="mui-title">Interfaces rapidas con MatiasUI</h1>
        <p class="mui-subtitle">Componentes listos para landing, dashboards, tiendas, perfiles y CRUD.</p>
        <a class="mui-btn mui-btn-primary mui-btn-lg" href="#docs">Empezar</a>
      </div>
      <div class="mui-hero-media" aria-hidden="true"></div>
    </div>
  </section>
</body>
```

## Astro

```astro
---
import "../node_modules/matias-ui/dist/matias-ui.css";
---

<html lang="es">
  <body class="mui-body">
    <slot />
    <script src="/node_modules/matias-ui/dist/matias-ui.js"></script>
  </body>
</html>
```

Si preferis copiar los archivos, ponelos en `public/matias-ui/`:

```astro
<link rel="stylesheet" href="/matias-ui/matias-ui.css" />
<script defer src="/matias-ui/matias-ui.js"></script>
```

## Componentes incluidos

Navbars, footers, cards, forms, botones, badges, checkout, login/register, perfil, profile card, rating, contacto, hero, modales, visor 3D CSS, listas, tablas, menus, dropdowns, sidebars, search, hovers, secciones de contenido, CTA, featured sections, pricing tables, modales CRUD, popups, toasts, tabs, acordeones, progress bars, stats, timeline, skeleton loaders y utilidades responsive.

En la version 1.1 se agregaron mas de 30 piezas nuevas: alertas dismissibles, chips, breadcrumbs, pagination, stepper, notifications, inbox, kanban, chat bubbles, calendar, upload dropzone, empty states, metric rows, file tree, live preview, drawers, command menu, tooltips, marquee, counters y 10 utilidades de animacion.

## MatiasUI Blocks

La pagina `docs/blocks.html` incluye una biblioteca original de bloques con estilo crimson para cubrir familias completas:

- Marketing UI: heroes, features, pricing, CTAs, testimonials, FAQ, contact/newsletter, team/logos/portfolio, banners/popups y event schedule.
- Application UI: app shell, advanced tables, CRUD modals/drawers, filters, side navigation, stats, command menu, inbox, kanban, calendar, chat, auth y settings.
- E-commerce UI: storefront hero, product cards, product overview, cart, checkout/payment, order summary, tracking, refund, discount popup y mega footer.
- Publisher UI: blog templates, article header, related posts, comments, author bio, newsletter, tags, quote callout y table of contents.
- Pages/states: 404, 500, maintenance, empty, loading y success.

## Paginas de documentacion

```text
docs/
  index.html          Inicio y guia principal
  blocks.html         Biblioteca original de bloques
  components.html     Galeria extendida con 10 componentes por seccion
  snippets.html       Snips HTML copiables
  live.html           Playground live con preview
  animations.html     Utilidades de motion
  file-tree.html      Estructura recomendada
```

## Ejemplos

```text
examples/
  basic.html          Pagina minima
  dashboard.html      Dashboard con stats, kanban, inbox y tabla
  ecommerce.html      Catalogo, pricing, checkout y producto
  credit-card.html    Tarjeta credito/debito interactiva completa
```

## Interacciones

El JS usa atributos `data-mui-*`:

- `data-mui-nav` y `data-mui-nav-toggle` para nav responsive.
- `data-mui-dropdown` y `data-mui-dropdown-trigger` para dropdowns.
- `data-mui-open-modal="#id"` y `data-mui-close-modal` para modales.
- `data-mui-tabs` con `role="tab"` y `role="tabpanel"` para tabs.
- `data-mui-accordion` y `data-mui-accordion-trigger` para acordeones.
- `data-mui-toast="Mensaje"` para disparar toasts.
- `data-mui-theme-toggle` para alternar crimson/dark.
- `data-mui-copy="#id"` para copiar snippets.
- `data-mui-live`, `data-mui-live-editor` y `data-mui-live-preview` para playgrounds.
- `data-mui-open-drawer="#id"` y `data-mui-close-drawer` para drawers.
- `data-mui-dismiss=".selector"` para cerrar alertas o popups.
- `data-mui-count-to="100"` para contadores animados.
- `data-mui-search-focus` para enfocar una busqueda con la tecla `/`.

Tambien podes llamar:

```js
MatiasUI.toast("Guardado correctamente");
MatiasUI.init();
```

## Desarrollo

```bash
npm run serve
```

Abrir:

```text
http://localhost:4173/docs/
```

## Personalizacion

Sobrescribi tokens CSS:

```css
:root {
  --mui-primary: #c1123f;
  --mui-accent: #0f766e;
  --mui-radius: 8px;
  --mui-font: Inter, system-ui, sans-serif;
}
```
# MatiasUI
# MatiasUI
