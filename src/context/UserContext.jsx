import { createContext, useEffect, useState } from "react";
import { auth, db } from "../db";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  /*  const loginStatus = async () => {
    try {
      await new Promise(() => {
        auth.onAuthStateChanged((log) => {
          setUser(log);
          if (!dataUser.find((e) => e.email === user.email)) {
            addDoc(collection(db, "users"), {
              email: user.email,
              name: user.displayName,
              profilPic: user.photoURL,
              stats: {
                answers: 0,
                badAnswers: 0,
                goodAnswers: 0,
                studyTime: 0,
              },
            });
          }
          data();
        });
      });
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  }; */

  const data = () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setDataUser(snapshot.docs.map((doc) => {return {...doc.data(),id: doc.id}}));
    });
  };

  useEffect(() => {
    data();
  }, [dataUser]);

  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
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
              studyTime: 0,
            },
          });
        }
        data();
        navigate("/home");
      })
      .catch((error) => setError(error.message));
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
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
              studyTime: 0,
            },
          });
        }
        data();
        navigate("/home");
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
