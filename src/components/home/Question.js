const Question = ({
  children,
  setShowModal,
  sentence,
  isTrue,
  setLives,
  setAnswers,
}) => {
  return (
    <div className='d-flex flex-column justify-content-around p-5 pt-2'>
      <p>{sentence}</p>
      {children}
      <button
        className='btn p-md-2 pt-3 mt-3'
        onClick={async () => {
          setShowModal(true);
          setLives((vidas) => (!isTrue ? vidas - 1 : vidas));
          setAnswers((answers) =>
            isTrue
              ? { ...answers, good: answers.good + 1 }
              : { ...answers, bad: answers.bad + 1 }
          );
        }}
      >
        Confirmar
      </button>
    </div>
  );
};

export default Question;
