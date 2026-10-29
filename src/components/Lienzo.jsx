import { useState } from 'react'
import { useEffect, useRef } from 'react'
import {
  ANCHO, ALTO, capas, estrellitas, bloques, curvas,
  pieLienzo, gatoZona, gatoAviso, anclas,
} from '../data/capas.js'
import { pie } from '../data/contenido.js'
import BlurText from './BlurText.jsx'
import OrbitLogos from './OrbitLogos'
import '../styles/App.css'

const px = (v) => `${(v / ANCHO) * 100}%`
const py = (v) => `${(v / ALTO) * 100}%`
const fuente = (size) => `${(size / ANCHO) * 100}cqw`

export default function Lienzo({ onGatoClick }) {
  const [halftoneCoord, setHalftoneCoord] = useState({ x: 50, y: 50, active: false })

  // Estados para el efecto Holo Card en estrellas y títulos
  const [holoCoords, setHoloCoords] = useState({ x: 50, y: 50, active: false })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setHalftoneCoord({ x, y, active: true })
  }

  const handleMouseLeave = () => {
    setHalftoneCoord((prev) => ({ ...prev, active: false }))
  }

  // Manejador para el movimiento holográfico
  const handleHoloMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    // Calculamos inclinación en grados (-15deg a 15deg)
    const rx = -((e.clientY - rect.top) / rect.height - 0.5) * 30
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 30

    e.currentTarget.style.setProperty('--rx', `${rx}deg`)
    e.currentTarget.style.setProperty('--ry', `${ry}deg`)
    e.currentTarget.style.setProperty('--x', `${x}%`)
    e.currentTarget.style.setProperty('--y', `${y}%`)
  }

  return (
    <div className="lienzo">
      {/* Puntos de anclaje del menú */}
      {Object.entries(anclas).map(([id, y]) => (
        <span key={id} id={id} className="ancla" style={{ top: py(y) }} />
      ))}

      {/* Capas (Gatos, Fondos, Estrellas y Títulos) */}
      {capas.map((c) => {
        const esGato = c.id.includes('gato') || c.src.includes('gato')
        const esEstrella = c.id.includes('estrella')
        const esTitulo = c.id.includes('titulo')

        // 1. Efecto Halftone para los Gatos
        if (esGato) {
          return (
            <div
              key={c.id}
              className={`capa-gato-contenedor halftone-reveal-card ${halftoneCoord.active ? 'is-active' : ''}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                left: px(c.x),
                top: py(c.y),
                width: px(c.w),
                height: py(c.h),
                position: 'absolute',
                '--mouse-x': `${halftoneCoord.x}%`,
                '--mouse-y': `${halftoneCoord.y}%`,
              }}
            >
              <img src={c.src} alt="" className="capa halftone-image" style={{ width: '100%', height: '100%' }} />
            </div>
          )
        }

        // 2. Efecto Holo Card para Estrellas y Títulos
        if (esEstrella || esTitulo) {
          return (
            <div
              key={c.id}
              className="holo-card"
              onMouseMove={handleHoloMouseMove}
              style={{
                left: px(c.x),
                top: py(c.y),
                width: px(c.w),
                height: py(c.h),
                position: 'absolute',
              }}
            >
              <img src={c.src} alt="" className="capa holo-image" style={{ width: '100%', height: '100%' }} />
              <div className="holo-effect" />
            </div>
          )
        }

        // Resto de capas normales (fondos, olas, flores, galería)
        return (
          <img
            key={c.id}
            src={c.src}
            alt=""
            className="capa"
            style={{ left: px(c.x), top: py(c.y), width: px(c.w), height: py(c.h) }}
          />
        )
      })}

      {/* Órbita de logos */}
      <div 
        style={{
          position: 'absolute',
          left: px(950),
          top: py(2000),
          width: px(700),
          height: py(700),
          pointerEvents: 'auto',
        }}
      >
        <OrbitLogos />
      </div>

      {/* Estrellitas decorativas */}
      {estrellitas.map((e, i) => (
        <span
          key={i}
          className="estrellita"
          style={{ left: px(e.cx - e.t / 1), top: py(e.cy - e.t / 1), width: px(e.t), height: 60 }}
        />
      ))}

      {/* Textos curvos (SVG) */}
      <svg className="capa-svg" viewBox={`0 0 ${ANCHO} ${ALTO}`} preserveAspectRatio="none" aria-hidden="true">
        {curvas.map((c) => (
          <g key={c.id}>
            <path id={`ruta-${c.id}`} d={c.camino} fill="none" />
            {[
              { color: c.oscuro, mover: [0, 0] },
              { color: c.claro, mover: c.desplazo },
            ].map((capa, i) => (
              <text
                key={i}
                fontSize={c.size}
                fill={capa.color}
                transform={`translate(${capa.mover[0]} ${capa.mover[1]})`}
              >
                <textPath href={`#ruta-${c.id}`} textLength={c.largo} lengthAdjust="spacing">
                  {c.texto}
                </textPath>
              </text>
            ))}
          </g>
        ))}
      </svg>

      {/* Bloques de texto con BlurText */}
      {bloques.map((b) => (
        <div
          key={b.id}
          className="texto"
          style={{
            left: px(b.cx - 700),
            width: px(1400),
            top: py(b.top),
            fontSize: fuente(b.size),
            lineHeight: b.lh / b.size,
            color: b.color,
            textShadow: b.sombra
              ? `${b.sombra[0] / b.size}em ${b.sombra[1] / b.size}em 0 ${b.sombra[2]}`
              : undefined,
          }}
        >
          {b.lineas.map((linea) => (
            <BlurText key={linea} text={linea} delay={150} />
          ))}
        </div>
      ))}

      {/* Pie de página */}
      <div className="pie-lienzo" style={{ top: py(pieLienzo.y), height: py(pieLienzo.h) }} />
      <p className="texto pie-texto" style={{ left: px(1017 - 700), width: px(1400), top: py(6323), fontSize: fuente(36), lineHeight: 1.2 }}>
        {pie.copyright}
      </p>
      <p className="texto pie-texto" style={{ left: px(1001 - 700), width: px(1400), top: py(6382), fontSize: fuente(48), lineHeight: 1.2 }}>
        {pie.credito}
      </p>

      {/* Zona invisible del gato para abrir el contacto */}
      <button
        type="button"
        className="gato-zona"
        onClick={onGatoClick}
        aria-label="Abrir formulario de contacto"
        style={{ left: px(gatoZona.x), top: py(gatoZona.y), width: px(gatoZona.w), height: py(gatoZona.h) }}
      />
      <span
        className="gato-aviso"
        style={{ left: 410, top: 150 }}
      >
        Pulsa el gato para contactarme
      </span>

<svg className="capa-svg" viewBox={`0 0 ${ANCHO} ${ALTO}`} preserveAspectRatio="none" aria-hidden="true">
  {curvas.map((c) => (
    <g key={c.id}>
      <path id={`ruta-${c.id}`} d={c.camino} fill="none" />
      {[
        { color: c.oscuro, mover: [0, 0] },
        { color: c.claro, mover: c.desplazo },
      ].map((capa, i) => (
        <text
          key={i}
          fontSize={c.size}
          fill={capa.color}
          transform={`translate(${capa.mover[0]} ${capa.mover[1]})`}
        >
          {/* Usamos startOffset dinámico o dejamos que la animación CSS maneje el bucle */}
          <textPath 
            href={`#ruta-${c.id}`} 
            textLength={c.largo} 
            lengthAdjust="spacing"
            startOffset="0%"
          >
            {c.texto}
          </textPath>
        </text>
      ))}
    </g>
  ))}
</svg>

      
    </div>
  )
}