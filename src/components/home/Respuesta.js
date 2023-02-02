import React from "react";

const Respuesta = ({ text, isTrue, showModal, setSelected }) => {
  return (
    <div
      className={`respuesta d-flex justify-content-between align-items-center my-md-2 px-md-2 py-0 
      ${showModal ? (isTrue ? "correcta" : "incorrecta") : ""}`}
      onClick={setSelected(text)}
    >
      <p className="pt-1">{text}</p>
      <div className="circulo"></div>
    </div>
  );
};

export default Respuesta;
