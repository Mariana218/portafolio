import { Offcanvas } from 'react-bootstrap'
import { textos } from '../data/contenido.js'
import '../styles/App.css'

export default function PanelTextos({ show, onHide }) {
  return (
    <Offcanvas 
      show={show} 
      onHide={onHide} 
      placement="end" 
      scroll
      className="offcanvas-oscuro"
      data-bs-theme="dark"
    >
      <Offcanvas.Header closeButton closeLabel="Cerrar">
        <Offcanvas.Title>Textos del portafolio</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p className="fw-bold" style={{ color: 'var(--amarillo)' }}>{textos.encabezado}</p>
        <p className="fs-5">{textos.lema}</p>

        {[textos.proceso1, textos.proceso2, textos.proceso3].map((bloque) => (
          <p key={bloque[0]}>{bloque.join(' ')}</p>
        ))}

        <p>{textos.presumir}</p>

        <h3 className="h5">{textos.proyecto}</h3>

        {[textos.declaracion1, textos.declaracion2].map((bloque) => (
          <p key={bloque[0]}>{bloque.join(' ')}</p>
        ))}

        <p className="fw-bold">{textos.cierre}</p>
      </Offcanvas.Body>
    </Offcanvas>
  )
}