import { useEffect, useState } from "react";
import { handleClickEnlace } from "../controllers/handleClick";
import { getQuestions } from "../services/getQuestionsInfo";
import "../styles/Home.scss";
import {
  Pregunta,
  CuestionarioInfo,
  EnlaceCuestionario,
  ListaCuestionarios,
  Modal,
  Respuesta,
} from "./home/index";

const cuestionarios = ["HTML", "css", "js", "react", "git"];
const respuestas = [
  {
    response: "Practica tus conocim.",
    isTrue: false,
  },
  {
    response: "Practica tus conocimientos en la.",
    isTrue: true,
  },
  {
    response: "Practica tus conocimientos en.",
    isTrue: false,
  },
  {
    response: "Practica tus conocimientos en l.",
    isTrue: false,
  },
];

const Home = () => {
  const [opcion, setOpcion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState([]);
  const [currentCourse, setCurrentCourse] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getQuestions(setCourse);
  }, []);

  const filteredCourses = (opcion) => {
    setCurrentCourse(course.filter((questions) => questions.course === opcion));
  };
  const restartCourse = () => {
    setOpcion("");
    setCurrentQuestion(0);
  };

  useEffect(() => {
    filteredCourses(opcion);
  }, [opcion]);

  return (
    <div className="menu-item">
      {opcion === "" ? (
        <ListaCuestionarios>
          {cuestionarios.map((curso, index) => (
            <EnlaceCuestionario
              key={index}
              name={curso}
              setOpcion={() => {
                setOpcion(curso);
              }}
            />
          ))}
        </ListaCuestionarios>
      ) : (
        <div className="cuestionarios ">
          <CuestionarioInfo
            restartCourse={restartCourse}
            currentQuestion={currentQuestion}
          />
          {currentCourse[currentQuestion] && (
            <Pregunta
              setShowModal={setShowModal}
              sentence={currentCourse[currentQuestion].sentence}
              isTrue={currentCourse[currentQuestion].correct === selected}
            >
              {currentCourse[currentQuestion].options.map(
                (respuesta, index) => (
                  <Respuesta
                    key={index}
                    text={respuesta}
                    isTrue={
                      currentCourse[currentQuestion].correct === respuesta
                    }
                    showModal={showModal}
                    setSelected={setSelected}
                  />
                )
              )}
            </Pregunta>
          )}

          <Modal
            show={showModal}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            restartCourse={restartCourse}
            setShowModal={setShowModal}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
