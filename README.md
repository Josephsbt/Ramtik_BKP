# BKP CESOP - Dashboard Corporativo

Dashboard futurista para gestión de atenciones (Hogar, Calidad, Telco) con login, métricas BI y tipificación.

## Requisitos
- Navegador moderno (Chrome, Brave, Firefox, Edge).
- Servidor HTTP estático (Python 3 o Node).

## Clonar el repositorio
```bash
git clone git@github.com:Josephsbt/Ramtik_BKP.git
cd Ramtik_BKP
```

## Ejecutar en local
Desde la carpeta del proyecto (donde está `index.html`):
```bash
python3 -m http.server 8123
```
Luego abrir en el navegador:
```
http://127.0.0.1:8123/index.html
```
La aplicación se carga dentro de un iframe (`src/index.html`).

## Modo desarrollo (sin backend)
En `src/js/app.js`, buscar:
```js
var debug = false;
```
Cambiar a `true` para omitir la autenticación y entrar directamente al dashboard.

## Estructura principal
```
app/                  # Templates Angular (header, sidebar, dashboard, login)
src/
  assets/             # Logos, avatares, iconos
  css/
    futurista.css     # Estilos futuristas (tema oscuro, neón)
    stylesheet.css    # AdminLTE base
  js/
    app.js            # Lógica Angular principal
    city-bg.js        # Animación de fondo (skyline) en login
    matrix-bg.js      # Fondo Matrix (dashboard)
  index.html          # Entrada principal
bower_components/     # Dependencias frontend
dist/                 # Recursos compilados (skins, js)
```

## Archivos modificados (principales)
- `app/header.html` — reloj central, estados, menú de usuario, avatares.
- `app/home/dashboard/home-dashboard.tpl.html` — tarjetas de agentes, métricas, filtros, tipificación.
- `app/login/login.tpl.html` — fondo y caja de login.
- `src/css/futurista.css` — estilos neón, glassmorphism, modo oscuro.
- `src/js/app.js` — lógica de reloj, countdown, avatares, custom selects.
- `src/js/city-bg.js` — animación skyline en login.
- `src/index.html` — integración de canvas y scripts.
- `src/assets/avatars/` — avatares SVG (2 mujeres, 2 hombres).

## Notas
- No requiere compilación; es una SPA estática servida por HTTP.
- El backend (API) es opcional en modo debug.
```