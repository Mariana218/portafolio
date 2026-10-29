# Punto Creativo (React + Bootstrap)

La página está reconstruida por capas a partir del archivo de Illustrator:
las 6 mesas de trabajo se leen como un solo lienzo de 1920 x 6480 y cada pieza
está colocada con su posición real. Los textos son texto de verdad.

## Pasos en Visual Studio Code
1. Instala Node.js 18 o superior: https://nodejs.org
2. Abre esta carpeta en VS Code (Archivo > Abrir carpeta).
3. En la terminal (Ctrl + ñ):
   - `npm install`
   - `npm run dev`   (abre la dirección que aparece, normalmente http://localhost:5173)

## Dónde editar
- Textos: `src/data/contenido.js` (cada bloque es una lista de líneas)
- Posición y tamaño de cada pieza (x, y, w, h en px del diseño): `src/data/capas.js`
- Imágenes: `public/img` (en WebP; para reemplazar una, conserva el nombre)
- Colores y estilos: `src/styles/App.css`
- Formulario de contacto: `src/components/ModalContacto.jsx` (falta conectar el envío real)
- Publicar: `npm run build` genera la carpeta `dist`
