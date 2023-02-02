import HTML from '../../imgs/HTML.png';
import CSS from '../../imgs/CSS.png';
import JS from '../../imgs/JS.png';
import REACT from '../../imgs/REACT.png';
import GIT from '../../imgs/GIT.png';

const EnlaceCuestionario = ({ name, setOpcion }) => {
  const imgs = {
    HTML: HTML,
    CSS: CSS,
    JS: JS,
    REACT: REACT,
    GIT: GIT,
  };

  return (
    <div className='cuestionario col-6'>
      <figure
        onClick={() => {
          setOpcion();
        }}
      >
        <img src={imgs[name.toUpperCase()]} alt={`Cuestionario de ${name}`} />
      </figure>
      <h2>{name.toUpperCase()}</h2>
    </div>
  );
};

export default EnlaceCuestionario;
