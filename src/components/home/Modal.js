import React from "react";

const Modal = ({
  show,
  currentQuestion,
  setCurrentQuestion,
  restartCourse,
  setShowModal,
}) => {
  return (
    <div
      className={`modal-cuestionario d-flex flex-column justify-content-center 
      ${show ? "" : "d-none"}`}
    >
      <button
        className="btn p-2 m-5"
        onClick={() => {
          currentQuestion < 4 && setCurrentQuestion(currentQuestion + 1);
          currentQuestion === 4 && restartCourse();
          setShowModal(false);
        }}
      >
        Continuar
      </button>
    </div>
  );
};

export default Modal;
