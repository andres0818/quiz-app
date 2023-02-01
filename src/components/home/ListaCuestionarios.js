import EnlaceCuestionario from "./EnlaceCuestionario"

const cuestionarios = ["HTML", "CSS", "JS", "React", "SASS"]

const Cuestionarios = () => {
  return (
    <div className="cuestionarios">
      <p className="text-center px-5 py-4">
        Practica tus conocimientos en la categoría que prefieras.
      </p>
      <div className="d-flex flex-row-reverse flex-wrap p-3 justify-content-evenly">
        {cuestionarios.map((curso, index) => <EnlaceCuestionario key={index} name={curso} />)}
      </div>
    </div>
  )
}

export default Cuestionarios
