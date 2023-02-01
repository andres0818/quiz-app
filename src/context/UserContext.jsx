import { createContext, useState } from "react";
import { auth } from "../db";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);

  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((result) =>
      setUser(result.user)
    );
  };

  return (
    <UserContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </UserContext.Provider>
  );
};
