import { useState } from 'react'

const logos = [
  { id: 'illustrator', src: '/img/logoillustrator.webp', alt: 'Illustrator' },
  { id: 'blender', src: '/img/logoblender.webp', alt: 'Blender' },
  { id: 'aftereffects', src: '/img/logoaftereffects.webp', alt: 'After Effects' },
  { id: 'canva', src: '/img/logocanva.webp', alt: 'Canva' },
  { id: 'photoshop', src: '/img/logopotoshop.webp', alt: 'Photoshop' },
  { id: 'premiere', src: '/img/logopremier.webp', alt: 'Premiere' },
]

export default function OrbitLogos() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div 
      className="orbit-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`orbit-ring ${isPaused ? 'paused' : ''}`}>
        {logos.map((logo, index) => {
          // Calculamos la posición en círculo usando trigonometría básica (360 grados / cantidad de logos)
          const angle = (index / logos.length) * 360
          return (
            <div
              key={logo.id}
              className="orbit-item"
              style={{
                '--angle': `${angle}deg`,
              }}
            >
              <img src={logo.src} alt={logo.alt} className="orbit-logo-img" />
            </div>
          )
        })}
      </div>
      {/* Núcleo central opcional decorativo acorde a tu paleta */}
      <div className="orbit-core"></div>
    </div>
  )
}