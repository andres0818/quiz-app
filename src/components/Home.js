import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
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

const Home = () => {
  const [opcion, setOpcion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState([]);
  const [currentCourse, setCurrentCourse] = useState([]);
  const [selected, setSelected] = useState("");
  const [vidas, setHearts] = useState(3);

  const restartCourse = () => {
    setOpcion("");
    setCurrentQuestion(0);
  };

  useEffect(() => {
    getQuestions(setCourse);
  }, []);

  useEffect(() => {
    setShowModal(false);
    setHearts(3);
    setCurrentCourse(course.filter((questions) => questions.course === opcion));
  }, [opcion, course]);

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
            vidas={vidas}
          />
          {currentCourse[currentQuestion] && (
            <Pregunta
              setShowModal={setShowModal}
              sentence={currentCourse[currentQuestion].sentence}
              isTrue={currentCourse[currentQuestion].correct === selected}
              setHearts={setHearts}
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
                    selected={selected}
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
