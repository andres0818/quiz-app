import x from '../../icons/x.svg';
import corazon from '../../icons/corazon.svg';

const CuestionarioInfo = ({ vidas, setOpcion, setComprobado }) => {
  const numeroPregunta = 1

  return (
    <div className='d-flex justify-content-between align-items-center col-12 px-2 pt-2 mb-0'>
      <img
        className='col-1'
        src={x}
        alt='cerrar'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setOpcion('')
          setComprobado(false)
          }}
      />
      <div className='col-8 text-center progress-bar'>
        <div
          className={`progress ${numeroPregunta === 0
              ? ''
              : numeroPregunta === 1
                ? 'w-25'
                : numeroPregunta === 2
                  ? 'w-50'
                  : numeroPregunta === 3
                    ? 'w-75'
                    : 'w-100'
            }`}
        ></div>
      </div>
      <img className='col-1' src={corazon} alt='vidas' />
      <p className='col-1'>{vidas}</p>
    </div>
  );
};

export default CuestionarioInfo;
