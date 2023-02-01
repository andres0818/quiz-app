import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { user, loginGoogle, loginUser, registerUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onLogin = (e) => {
    e.preventDefault();
    //console.log(email, password);
    loginUser(email, password);
  };

  const onRegister = (e) => {
    e.preventDefault();
    //console.log(email, password);
    registerUser(email, password);
  };

  return (
    <div className="contenedor">
      <div className="contenedorMobile">
        <button type="button" onClick={loginGoogle}>
          Continuar con Google
        </button>
        <hr />
        <form onSubmit={(e) => onLogin(e)}>
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su correo electronico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Iniciar Sesion</button>
        </form>
        <button onClick={onRegister} type="submit">Registrarse</button>
        <hr />
      </div>
    </div>
  );
};

export default Login;
