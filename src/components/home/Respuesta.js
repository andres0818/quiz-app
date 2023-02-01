import React from 'react';

const Respuesta = ({ text, isTrue, comprobado }) => {
  return (
    <div
      className={`respuesta d-flex justify-content-between align-items-center my-md-2 px-md-2 py-0 ${
        comprobado ? (isTrue ? 'correcta' : 'incorrecta') : ''
      }`}
    >
      <p className='pt-1'>{text}</p>
      <div className='circulo'></div>
    </div>
  );
};

export default Respuesta;
