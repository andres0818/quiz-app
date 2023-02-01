const Cuestionario = ({ children, setComprobado }) => {
  return (
    <div className='d-flex flex-column justify-content-around p-5 pt-2'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit
        diam, faucibus a volutpat at, placerat sit amet arcu. Aliquam accumsan
        magna vitaer.
      </p>
      {children}
      <button className='btn p-md-2 pt-3 mt-3' onClick={() => { setComprobado(true) }}> Confirmar </button>
    </div>
  );
};

export default Cuestionario;
