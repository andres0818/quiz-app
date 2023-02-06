import { createContext, useEffect, useState } from "react";
import { auth, db } from "../db";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();
  const [inicioSesion, setInincioSesion] = useState()


  const loginStatus = async () => {
    try {
      await new Promise(() => {
        auth.onAuthStateChanged((log) => {
          setInincioSesion(log);
        });
      });
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  const data = () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setDataUser(snapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } }));
    });
  };

  useEffect(() => {
    loginStatus()
    data();
  }, []);

  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        navigate("/quiz-app/home");
        setUser(result.user);
        if (!dataUser.find((e) => e.email === result.user.email)) {
          addDoc(collection(db, "users"), {
            email: result.user.email,
            name: result.user.displayName ? result.user.displayName : "User",
            profilPic: result.user.photoURL ? result.user.displayName : "",
            stats: {
              answers: 0,
              badAnswers: 0,
              goodAnswers: 0,
              studyTime: serverTimestamp(),
            },
          });
        }
        data();
      })
      .catch((error) => setError(error.message));
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/quiz-app/home");
        setUser(result.user);
        if (!dataUser.find((e) => e.email === result.user.email)) {
          addDoc(collection(db, "users"), {
            email: result.user.email,
            name: result.user.displayName ? result.user.displayName : "User",
            profilPic: result.user.photoURL ? result.user.displayName : "",
            stats: {
              answers: 0,
              badAnswers: 0,
              goodAnswers: 0,
              studyTime: serverTimestamp(),
            },
          });
        }
        data();
      })
      .catch((error) => setError(error.message));
  };

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        dataUser,
        inicioSesion,
        loginGoogle,
        loginUser,
        registerUser,
        navigate,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
