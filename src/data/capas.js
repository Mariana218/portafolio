// Posiciones de todas las capas, en píxeles sobre un lienzo de 1920 x 6480
// (las 6 mesas de trabajo de Illustrator, una debajo de otra).
// Para mover o cambiar el tamaño de una pieza, edita x, y, w, h.
import { textos } from './contenido.js'
import '../styles/App.css'


export const ANCHO = 1920
export const ALTO = 6480

// De abajo hacia arriba (la última queda encima)
export const capas = [
  { id: 'fondo1', src: '/img/fondo1.webp', x: -9, y: -4, w: 1935, h: 1080 },
  { id: 'gato-inicio', src: '/img/gato.webp', x: -431, y: -10, w: 1790, h: 1890 },
  { id: 'fondo3', src: '/img/fondo3.webp', x: -450, y: 2690, w: 2765, h: 2921 },
  { id: 'fondo2', src: '/img/fondo2.webp', x: -203, y: 457, w: 2329, h: 3172 },
  { id: 'flor-verde-tenue', src: '/img/florverdeopacidad.webp', x: -371, y: 1923, w: 827, h: 833 },
  { id: 'flor-verde', src: '/img/florverde.webp', x: -173, y: 2263, w: 800, h: 813 },
  { id: 'ola2', src: '/img/ola2.webp', x: 0, y: 3000, w: 1925, h: 597 },
  { id: 'ola1', src: '/img/ola1.webp', x: 0, y: 568, w: 1925, h: 616 },
  { id: 'fondo4', src: '/img/fondo4.webp', x: -358, y: 4496, w: 2613, h: 1985 },
  { id: 'estrella-grande', src: '/img/estrellagrande.webp', x: -1127, y: 2968, w: 2226, h: 2180 },
  { id: 'estrella1', src: '/img/estrella1.webp', x: 1109, y: 933, w: 746, h: 721 },
  { id: 'estrella2', src: '/img/estrella2.webp', x: 154, y: 1224, w: 775, h: 806 },
  { id: 'estrella3', src: '/img/estrella3.webp', x: 930, y: 2056, w: 804, h: 797 },
  { id: 'galeria', src: '/img/galeria.webp', x: 803, y: 3854, w: 1014, h: 824 },
  { id: 'titulo', src: '/img/titulo1.webp', x: 901, y: -196, w: 1151, h: 1041 },
  { id: 'gato-final', src: '/img/gato.webp', x: 735, y: 4959, w: 1397, h: 1475 },
  { id: 'titulo-final', src: '/img/titulofinal.webp', x: 184, y: 5624, w: 819, h: 630 },
]

// Tres estrellitas decorativas sobre el arco vino (centro x, centro y, tamaño)
export const estrellitas = [
  { cx: 742, cy: 5075, t: 90 },
  { cx: 974, cy: 5075, t: 90 },
  { cx: 1196, cy: 5075, t: 90 },
]

// Bloques de texto centrados. top = arriba del bloque; sombra = [dx, dy, color]
export const bloques = [
  { id: 'proceso1', lineas: textos.proceso1, cx: 1499, top: 1520, size: 72, lh: 86.5, color: '#f0dd86', sombra: [-9, -2, '#283b02'] },
  { id: 'proceso2', lineas: textos.proceso2, cx: 483, top: 1895, size: 72, lh: 86.5, color: '#f0dd86', sombra: [-6, -1, '#283b02'] },
  { id: 'proceso3', lineas: textos.proceso3, cx: 1340, top: 2712, size: 72, lh: 86.5, color: '#f0dd86', sombra: [-8, -1, '#283b02'] },
  { id: 'declaracion1', lineas: textos.declaracion1, cx: 595, top: 5208, size: 48, lh: 57.5, color: '#f0dd86' },
  { id: 'declaracion2', lineas: textos.declaracion2, cx: 595, top: 5439, size: 48, lh: 57.5, color: '#f0dd86' },
]

// Textos que siguen una curva. Se dibujan dos veces: una oscura y otra clara encima, desplazada.
export const curvas = [
  {
    id: 'lema', texto: textos.lema, size: 63, largo: 1841,
    camino: 'M88 1111 L110 1116 L140 1122 L165 1127 L196 1132 L240 1139 L270 1143 L290 1145 L310 1147 L354 1151 L385 1152 L419 1153 L448 1152 L479 1150 L500 1149 L520 1148 L551 1146 L581 1144 L610 1141 L636 1139 L668 1135 L699 1131 L728 1126 L759 1120 L780 1115 L800 1110 L828 1102 L859 1093 L888 1082 L917 1071 L936 1063 L962 1052 L990 1038 L1017 1025 L1040 1013 L1062 1001 L1080 991 L1097 981 L1120 967 L1148 950 L1170 937 L1190 925 L1215 910 L1241 895 L1259 885 L1286 869 L1303 859 L1332 844 L1359 830 L1383 819 L1401 810 L1425 800 L1453 789 L1481 778 L1500 772 L1522 766 L1552 757 L1582 750 L1601 746 L1621 742 L1643 739 L1676 734 L1701 731 L1727 728 L1757 725 L1790 723',
    oscuro: '#283b02', claro: '#9aa566', desplazo: [-5, 2],
  },
  {
    id: 'presumir', texto: textos.presumir, size: 70, largo: 928,
    camino: 'M85 3362 L100 3391 L113 3413 L132 3448 L151 3482 L163 3504 L179 3532 L191 3554 L203 3576 L220 3607 L243 3648 L276 3679 L302 3697 L342 3712 L383 3717 L415 3719 L440 3721 L477 3725 L531 3734 L558 3740 L593 3750 L616 3757 L647 3771 L673 3786 L700 3808 L719 3838 L722 3847 L725 3856',
    oscuro: '#2e1018', claro: '#f0dd86', desplazo: [5, 6],
  },
]

// Pie de página (franja con degradado + dos líneas de texto)
export const pieLienzo = { y: 6208, h: 272 }

// Zona clicable del gato de la portada y su letrero
export const gatoZona = { x: 170, y: 60, w: 640, h: 900 }
export const gatoAviso = { x: 40, y: 40, size: 40 }

// Puntos a los que enlaza el menú (y en píxeles del lienzo)
export const anclas = { portada: 0, proceso: 1080, proyectos: 3240, cierre: 4320 }
