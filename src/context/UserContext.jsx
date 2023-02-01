import { createContext, useState } from "react";
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

  loginStatus();



  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => navigate('/home'))
      .catch((error) => setError(error.message));
  };



  const loginUser = (email, password) => {
    signInWithEmailAndPassword(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  return (
    <UserContext.Provider
      value={{ user, error, loginGoogle, loginUser, registerUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
