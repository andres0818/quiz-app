import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { handleSelected } from "../../services/getQuestionsInfo";

const Pregunta = ({ children, setShowModal, sentence, isTrue, setHearts }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const { user, dataUser } = useContext(UserContext);

  useEffect(() => {
    const userInfo = dataUser.find((e) => e.email === user.email);
    setCurrentUser(userInfo);
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="d-flex flex-column justify-content-around p-5 pt-2">
      <p>{sentence}</p>
      {children}
      <button
        className="btn p-md-2 pt-3 mt-3"
        onClick={async () => {
          handleSelected(currentUser, isTrue)
            .then(() => {
              setShowModal(true);
              setHearts((vidas) => (!isTrue ? vidas - 1 : vidas));
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {" "}
        Confirmar{" "}
      </button>
    </div>
  );
};

export default Pregunta;
