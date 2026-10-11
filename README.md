# Portafolio Profesional de Diseño Gráfico & CV

Un sitio web moderno, minimalista y de estética editorial diseñado específicamente para una diseñadora gráfica profesional. El proyecto está construido con **HTML5 semántico, CSS3 moderno y JavaScript vanilla**, sin dependencias obligatorias ni compiladores pesados, lo que permite visualizarlo inmediatamente y editarlo con total facilidad.

---

## 📁 Estructura del Proyecto

```text
D:\Development Mariana\Web\
├── index.html                  # Estructura semántica y accesible del sitio
├── README.md                   # Esta guía de uso y personalización
├── css/
│   ├── style.css               # Variables de color, tipografía y estilos base
│   ├── components.css          # Encabezado, hero, tarjetas, filtros, modal y footer
│   └── responsive.css          # Adaptación para tablets y celulares
├── js/
│   ├── data.js                 # ARCHIVO CENTRAL: Edita aquí todos tus datos y proyectos
│   ├── modal.js                # Lógica del visor detallado de proyectos (accesible)
│   └── main.js                 # Inicialización, filtrado por categorías y animaciones
└── assets/
    ├── documents/
    │   └── CV_Mariana_Diseno.pdf  # Tu archivo PDF de CV descargable
    └── images/                 # Portadas vectoriales y recursos visuales
        ├── hero-cover.svg
        ├── profile-avatar.svg
        ├── editorial-1.svg, editorial-2.svg
        ├── web-1.svg, web-2.svg
        ├── branding-1.svg, branding-2.svg
        ├── packaging-1.svg, packaging-2.svg
        └── otros-1.svg, otros-2.svg
```

---

## 🚀 Cómo Ejecutar y Ver la Página Localmente

No necesitas instalar frameworks ni librerías para ver tu portafolio. Tienes varias opciones:

### Opción 1: Abrir directamente (La más rápida)
Simplemente haz **doble clic en el archivo `index.html`** desde el Explorador de Archivos de Windows, o en la consola ejecuta:

```powershell
Start-Process "d:\Development Mariana\Web\index.html"
```

### Opción 2: Usar un servidor local ligero (Recomendado para desarrollo)
Si tienes **Python**, **Node.js** o la extensión **Live Server** de VS Code:

- **Con Python:**
  ```powershell
  python -m http.server 8000
  ```
  Luego abre en tu navegador: `http://localhost:8000`

- **Con Node.js (npx):**
  ```powershell
  npx serve .
  ```

- **Con VS Code:**
  Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## ✏️ Cómo Personalizar el Contenido

No necesitas modificar código HTML para cambiar tus proyectos o información. Todo está centralizado en:

👉 **`js/data.js`**

### 1. Cambiar tu Nombre, Datos de Contacto y Redes Sociales
Abre `js/data.js` y busca el bloque `profile`:
```javascript
profile: {
  name: "Mariana Silva",                    // Tu nombre profesional
  role: "Diseñadora Gráfica & Directora de Arte",
  email: "tu-correo-real@gmail.com",         // Tu correo para recibir mensajes directos
  socialLinks: {
    linkedin: "https://linkedin.com/in/tu-perfil",
    behance: "https://behance.net/tu-perfil",
    instagram: "https://instagram.com/tu-perfil"
  }
}
```

### 2. Cambiar tu CV en PDF
1. Guarda tu currículum en formato PDF dentro de la carpeta:
   `assets/documents/mi-cv-final.pdf`
2. En `js/data.js`, actualiza la propiedad `cvPath`:
   ```javascript
   cvPath: "assets/documents/mi-cv-final.pdf",
   cvFileName: "CV_Mariana_Silva_2026.pdf"
   ```

### 3. Cambiar tu Fotografía
1. Guarda tu foto en `assets/images/` (por ejemplo `mi-foto.jpg`).
2. En `js/data.js`, actualiza:
   ```javascript
   avatarImage: "assets/images/mi-foto.jpg"
   ```

### 4. Agregar, Editar o Eliminar Proyectos
En `js/data.js`, dentro del arreglo `projects: [ ... ]`, cada proyecto tiene este formato:

```javascript
{
  id: "mi-nuevo-proyecto",
  title: "Nombre del Proyecto",
  category: "branding", // Opciones: "editorial", "diseno-web", "branding", "packaging", "otros"
  categoryLabel: "Branding",
  year: "2026",
  client: "Nombre del Cliente",
  role: "Dirección de arte e identidad",
  shortDescription: "Breve resumen para la tarjeta en la página principal.",
  coverImage: "assets/images/mi-portada.jpg",
  gallery: [
    "assets/images/foto-1.jpg",
    "assets/images/foto-2.jpg"
  ],
  objective: "El reto u objetivo del proyecto...",
  process: "El proceso creativo que seguiste...",
  result: "El resultado final obtenido...",
  tools: ["Adobe Illustrator", "InDesign", "Figma"]
}
```

- Para **agregar** un proyecto: copia y pega un bloque entero de proyecto.
- Para **eliminarlo**: simplemente borra el bloque entre llaves `{ ... }`.
- Para **reordenar**: cambia el orden de los bloques en el arreglo.

### 5. Categorías Soportadas
Los filtros interactivos soportan automáticamente las 5 categorías solicitadas:
1. `editorial` — Editorial (revistas, libros, carteles, publicaciones, tipografía).
2. `diseno-web` — Diseño web (sitios, landing pages, interfaces digitales).
3. `branding` — Branding (logotipos, identidad visual, sistemas de marca).
4. `packaging` — Packaging (empaques, etiquetas, diseño de producto).
5. `otros` — Otros proyectos (ilustración, experimentación visual, personal).

---

## 🎨 Personalización de Estilos y Colores

En el archivo **`css/style.css`**, puedes ajustar fácilmente la paleta de colores y las fuentes en las primeras líneas (`:root`):

```css
:root {
  --bg-primary: #FAF8F5;          /* Fondo marfil / blanco cálido */
  --bg-secondary: #F3EFEA;        /* Gris cálido secundario */
  --text-primary: #141414;        /* Color principal de títulos y textos */
  --border-subtle: #E7E3DC;       /* Líneas de retícula */
  
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-display: 'Syne', sans-serif;
}
```

---

## 🌐 Publicación en Internet (Hosting Gratuito)

Al no requerir backend ni bases de datos, este sitio puede publicarse gratis en segundos en:

1. **GitHub Pages:**
   - Sube la carpeta a un repositorio en GitHub.
   - Ve a *Settings > Pages* y activa GitHub Pages en la rama `main`.
2. **Netlify:**
   - Arrastra la carpeta `d:\Development Mariana\Web` directamente en [app.netlify.com/drop](https://app.netlify.com/drop).
3. **Vercel:**
   - Ejecuta `npx vercel` o conéctalo con tu repositorio de GitHub.

---

Diseñado con cuidado editorial, alto estándar de rendimiento, accesibilidad web (WCAG) y código limpio.
