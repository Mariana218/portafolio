import { useState } from 'react'
import Navegacion from './components/Navegacion.jsx'
import Lienzo from './components/Lienzo.jsx'
import ModalContacto from './components/ModalContacto.jsx'
import PanelTextos from './components/PanelTextos.jsx'
import { titulo } from './data/contenido.js'

export default function App() {
  const [verContacto, setVerContacto] = useState(false)
  const [verTextos, setVerTextos] = useState(false)

  return (
    <>
      <Navegacion
        onContacto={() => setVerContacto(true)}
        onTextos={() => setVerTextos(true)}
      />

      <main>
        <h1 className="visually-hidden">{titulo}</h1>
        <Lienzo onGatoClick={() => setVerContacto(true)} />
      </main>

      <ModalContacto show={verContacto} onHide={() => setVerContacto(false)} />
      <PanelTextos show={verTextos} onHide={() => setVerTextos(false)} />
    </>
  )
}
