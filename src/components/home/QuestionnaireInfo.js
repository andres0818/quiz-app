import x from '../../icons/x.svg';
import heart from '../../icons/corazon.svg';
import { useEffect } from 'react';

const QuestionnaireInfo = ({ lives, restartCourse, currentQuestion }) => {
  useEffect(() => {
    lives === -1 && restartCourse();
  }, [lives, restartCourse]);

  return (
    <div className='d-flex justify-content-between align-items-center col-12 px-5 pt-4 pb-2 mb-0'>
      <img
        className='col-1'
        src={x}
        alt='cerrar'
        style={{ cursor: 'pointer' }}
        onClick={() => restartCourse()}
      />
      <div className='col-8 text-center progress-bar'>
        <div
          className={`progress ${
            currentQuestion === 0
              ? ''
              : currentQuestion === 1
              ? 'w-25'
              : currentQuestion === 2
              ? 'w-50'
              : currentQuestion === 3
              ? 'w-75'
              : 'w-100'
          }`}
        ></div>
      </div>
      <div className='col-2 d-flex align-items-center justify-content-evenly'>
        <img  src={heart} alt='Oportunidades' />
        <p className='mt-3 text-white'>{lives}</p>
      </div>
    </div>
  );
};

export default QuestionnaireInfo;
