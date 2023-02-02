const Respuesta = ({ text, isTrue, showModal, setSelected, selected }) => {
  return (
    <div
      className={`respuesta d-flex justify-content-between align-items-center my-2 px-2 py-0 
      ${showModal ? (isTrue ? 'correcta' : 'incorrecta') : ''} ${
        selected === text ? 'selected' : ''
      }`}
      onClick={() => setSelected(text)}
    >
      <p className='pt-1'>{text}</p>
      <div
        className={`circulo ${selected === text ? 'circle-selected' : ''}`}
      ></div>
    </div>
  );
};

export default Respuesta;
