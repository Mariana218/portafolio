import { useState } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { areasInteres } from '../data/contenido.js'
import '../styles/App.css'

const inicial = { nombre: '', correo: '', area: '', mensaje: '' }

export default function ModalContacto({ show, onHide }) {
  const [datos, setDatos] = useState(inicial)
  const [validado, setValidado] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const cambiar = (e) =>
    setDatos((previo) => ({ ...previo, [e.target.name]: e.target.value }))

  const cerrar = () => {
    setValidado(false)
    setEnviado(false)
    onHide()
  }

  const enviar = (e) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      setValidado(true)
      return
    }
    console.log('Consulta enviada:', datos)
    setEnviado(true)
    setDatos(inicial)
    setValidado(false)
  }

  return (
    <Modal 
      show={show} 
      onHide={cerrar} 
      centered 
      contentClassName="modal-contacto" 
      data-bs-theme="dark"
    >
      <Modal.Header closeButton closeLabel="Cerrar contacto">
        <Modal.Title>Contacto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Cuéntame sobre tu proyecto y te responderé a la brevedad posible.</p>

        {enviado && (
          <Alert variant="success">¡Gracias! Recibí tu consulta.</Alert>
        )}

        <Form noValidate validated={validado} onSubmit={enviar}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control
              name="nombre"
              value={datos.nombre}
              onChange={cambiar}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="correo">
            <Form.Label>Correo electrónico *</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={datos.correo}
              onChange={cambiar}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="area">
            <Form.Label>Área de interés *</Form.Label>
            <Form.Select
              name="area"
              value={datos.area}
              onChange={cambiar}
              required
            >
              <option value="">Selecciona una opción</option>
              {areasInteres.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="mensaje">
            <Form.Label>Mensaje *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              value={datos.mensaje}
              onChange={cambiar}
              required
            />
          </Form.Group>

          <Button type="submit" className="btn-menu w-100">
            Enviar consulta
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}