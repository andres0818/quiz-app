const Pregunta = ({ children, setShowModal, sentence, isTrue }) => {
  /** Actualizar puntaje de usuario de acuerdo a prop, isTrue */
  return (
    <div className="d-flex flex-column justify-content-around p-5 pt-2">
      <p>{sentence}</p>
      {children}
      <button
        className="btn p-md-2 pt-3 mt-3"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {" "}
        Confirmar{" "}
      </button>
    </div>
  );
};

export default Pregunta;
