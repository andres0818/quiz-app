import '../styles/Home.scss';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getQuestions, sendAnswers } from '../services/getQuestionsInfo';
import {
  Question,
  QuestionnaireInfo,
  QuestionnaireLink,
  QuestionnaireList,
  Modal,
  Response,
} from './home/index';

const questionnaires = ['HTML', 'css', 'js', 'react', 'git'];

const Home = () => {
  const [option, setOption] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState([]);
  const [currentCourse, setCurrentCourse] = useState([]);
  const [selected, setSelected] = useState('');
  const [lives, setLives] = useState(3);
  const [currentUser, setCurrentUser] = useState();
  const [answers, setAnswers] = useState({
    good: 0,
    bad: 0,
  });

  const { user, dataUser } = useContext(UserContext);

  useEffect(() => {
    const userInfo = dataUser.find((e) => e.email === user.email);
    setCurrentUser(userInfo);
  }, [dataUser, user.email]);

  useEffect(() => {
    sendAnswers(currentUser);
  }, [currentUser]);

  const restartCourse = () => {
    setShowModal(false);
    setLives(3);
    setOption('');
    setCurrentQuestion(0);
    setCurrentUser((user) => {
      const formated = {
        ...user,
        stats: {
          ...user.stats,
          answers: user.stats.answers + answers.bad + answers.good,
          badAnswers: user.stats.badAnswers + answers.bad,
          goodAnswers: user.stats.goodAnswers + answers.good,
        },
      };
      return formated;
    });
    setAnswers({
      good: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    getQuestions(setCourse);
  }, []);

  useEffect(() => {
    setCurrentCourse(course.filter((questions) => questions.course === option));
  }, [option, course]);

  return (
    <div className='menu-item'>
      {option === '' ? (
        <QuestionnaireList>
          {questionnaires.map((curso, index) => (
            <QuestionnaireLink
              key={index}
              name={curso}
              setOption={() => setOption(curso)}
            />
          ))}
        </QuestionnaireList>
      ) : (
        <div className='cuestionarios '>
          <QuestionnaireInfo
            restartCourse={restartCourse}
            currentQuestion={currentQuestion}
            lives={lives}
          />
          {currentCourse[currentQuestion] && (
            <Question
              setShowModal={setShowModal}
              sentence={currentCourse[currentQuestion].sentence}
              isTrue={currentCourse[currentQuestion].correct === selected}
              setLives={setLives}
              setAnswers={setAnswers}
            >
              {currentCourse[currentQuestion].options.map(
                (respuesta, index) => (
                  <Response
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
            </Question>
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
