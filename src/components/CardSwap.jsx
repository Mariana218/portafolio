import { useState } from 'react'
import '../styles/App.css'

const DEFAULT_CARDS = [
  { id: 1, title: 'Apoe! - Libro Interactivo', image: '/img/image2.png' },
  { id: 2, title: 'Proceso de Ilustración', image: '/img/image.png' },
  { id: 3, title: 'Manual de Marca', image: '/img/image3.png' },
  { id: 4, title: 'Book ilustrado', image: '/img/image4.png' },
  { id: 5, title: 'Diseño de Personajes', image: '/img/image5.png' },
  { id: 6, title: 'Escenario 3D', image: '/img/image6.png' },
]

export default function CardSwap({ cards = DEFAULT_CARDS }) {
  const [items, setItems] = useState(cards)

  // Función para mover la tarjeta superior al fondo al hacer clic
  const handleSwap = () => {
    setItems((prevItems) => {
      const copy = [...prevItems]
      const shifted = copy.shift()
      copy.push(shifted)
      return copy
    })
  }

  return (
    <div className="card-swap-container" onClick={handleSwap}>
      <div className="card-swap-track w-100 mb-5">
        {items.map((card, index) => {
          // Asignamos clases según su posición visual en la pila (manejando más elementos)
          let stackClass = 'card-hidden'
          if (index === 0) stackClass = 'card-front'
          else if (index === 1) stackClass = 'card-second'
          else if (index === 2) stackClass = 'card-third'
          else if (index === 3) stackClass = 'card-fourth'

          return (
            <div key={card.id} className={`card-swap-item ${stackClass}`}>
              <img src={card.image} alt={card.title} />
              <div className="card-swap-title">{card.title}</div>
            </div>
          )
        })}
      </div>
      <div className="card-swap-hint border w-50 p-2 rounded-5 text-center fw-bold fs-5">Haz clic para cambiar</div>
    </div>
  )
}