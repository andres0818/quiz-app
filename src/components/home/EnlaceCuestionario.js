import img from '../../imgs/HTML.png'

const EnlaceCuestionario = ({ name }) => {
  return (
    <div className="cuestionario col-6">
      <figure>
        <img src={img} alt={`Cuestionario de ${name}`} />
      </figure>
      <h2>{name}</h2>
    </div>
  )
}

export default EnlaceCuestionario;
