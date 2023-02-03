const QuestionnaireList = ({ children }) => {
  return (
    <div className='cuestionarios'>
      <p className='text-center px-5 pt-4 '>
        Practica tus conocimientos en la categoría que prefieras.
      </p>
      <div className='d-flex flex-row-reverse flex-wrap p-3 justify-content-evenly'>
        {children}
      </div>
    </div>
  );
};

export default QuestionnaireList;
