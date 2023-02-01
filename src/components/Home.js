import { useState } from 'react';
import '../styles/Home.scss';
import Cuestionario from './home/Cuestionario';
import CuestionarioInfo from './home/CuestionarioInfo';
import EnlaceCuestionario from './home/EnlaceCuestionario';
import ListaCuestionarios from './home/ListaCuestionarios';
import Modal from './home/Modal';
import Respuesta from './home/Respuesta';

const cuestionarios = ['HTML', 'CSS', 'JS', 'React', 'SASS'];
const respuestas = [
  {
    response: 'Practica tus conocim.',
    isTrue: false,
  },
  {
    response: 'Practica tus conocimientos en la.',
    isTrue: true,
  },
  {
    response: 'Practica tus conocimientos en.',
    isTrue: false,
  },
  {
    response: 'Practica tus conocimientos en l.',
    isTrue: false,
  },
];


const Home = () => {
  const [opcion, setOpcion] = useState('');
  const [comprobado, setComprobado] = useState(false);

  return (
    <div className='menu-item'>
      {opcion === '' ? <ListaCuestionarios>
        {cuestionarios.map((curso, index) => (
          <EnlaceCuestionario key={index} name={curso} setOpcion={setOpcion} />
        ))}
      </ListaCuestionarios> : (
        <div className='cuestionarios '>
          <CuestionarioInfo setOpcion={setOpcion} setComprobado={setComprobado}/>
          <Cuestionario name={opcion} setComprobado={setComprobado}>
            {respuestas.map((respuesta, index) => (
              <Respuesta
                key={index}
                text={respuesta.response}
                isTrue={respuesta.isTrue}
                comprobado={comprobado}
              />
            ))}
          </Cuestionario>
          <Modal show={comprobado} setComprobado={setComprobado}/>
        </div>
      )}
    </div>
  );
};

export default Home;
