import { useState } from 'react'
import Modal from 'react-modal'
import './App.css'

export default function App() {

  const [nome, setNome] = useState('')

  const [modalAberto, setModalAberto] = useState(false)

  function abrirModal() {
    setModalAberto(true)
  }

  function fecharModal() {
    setModalAberto(false)
  }

  function receberNome() {
    alert(nome)
  }

  return (
    <div className='containerApp'>
      <h1>Trabalhando com Modal</h1>
      <button onClick={abrirModal}>Abrir Modal</button>
      <Modal
        className="Modal"
        overlayClassName="Overlay"

        isOpen={modalAberto}>
        <h1>Modal esta ABERTO</h1>
        <form onSubmit={receberNome}>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button type='submit'>Enviar</button>
        </form>
        <button onClick={fecharModal}>Fechar Modal</button>
      </Modal>
    </div>

  )
}


