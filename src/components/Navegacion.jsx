import { Button } from 'react-bootstrap'
import { enlacesMenu } from '../data/contenido.js'
import '../styles/App.css'

export default function Navegacion({ onContacto, onTextos }) {
  return (
    <div className="dock-fixed-wrapper">
      <div className="dock-container">
        <nav className="dock-navbar">
          <div className="dock-items">
            {enlacesMenu.map((enlace) => (
              <a key={enlace.href} href={enlace.href} className="dock-item">
                {enlace.texto}
              </a>
            ))}
            
            <button type="button" className="dock-item btn-contacto-link" onClick={onContacto}>
              Contacto
            </button>

            <Button className="btn btn-menu rounded-5 dock-btn-textos" size="sm" onClick={onTextos}>
              Leer textos
            </Button>
          </div>
        </nav>
      </div>
    </div>
  )
}