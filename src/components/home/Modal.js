import React from 'react'

const Modal = ({ show, setComprobado }) => {
  return (
    <div className={`modal-cuestionario d-flex flex-column justify-content-center ${show ? '' : 'd-none'}`}>
      <button className='btn p-2 m-5' onClick={() => setComprobado(false)}>Continuar</button>
    </div>
  )
}

export default Modal
