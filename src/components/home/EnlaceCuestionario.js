import img from '../../imgs/HTML.png'

const EnlaceCuestionario = ({ name, setOpcion }) => {
  return (
    <div className="cuestionario col-6">
      <figure onClick={() => setOpcion(name)}>
        <img src={img} alt={`Cuestionario de ${name}`} />
      </figure>
      <h2>{name}</h2>
    </div>
  )
}

export default EnlaceCuestionario;
