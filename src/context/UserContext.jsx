import { createContext, useEffect, useState } from "react";
import { auth } from "../db";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";



export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const loginStatus = async () => {
    try {
      const user = await new Promise(() => {
        auth.onAuthStateChanged((user) => {
          setUser(user)
        });
      });
      console.log(user);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(
    () => {
      loginStatus();
    }, []
  )



  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => navigate('/home'))
      .catch((error) => setError(error.message));
  };



  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => setUser(result.user))
      .catch((error) => { console.log(error.message); setError(error.message) });
  };



  return (
    <UserContext.Provider
      value={{ user, error, loginGoogle, loginUser, registerUser, navigate }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
