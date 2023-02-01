import { createContext, useState } from "react";
import { auth } from "../db";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();


  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((result) =>
      setUser(result.user),
      navigate('/home')
    );
  };

  return (
    <UserContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </UserContext.Provider>
  );
};
