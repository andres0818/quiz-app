import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/Login.scss";
import { google } from "../icons/index";

const Login = () => {
  const { user, loginGoogle, loginUser, registerUser } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const onLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const onRegister = (e) => {
    e.preventDefault();
    registerUser(email, password);
  };

  return (
    <div className="contenedor">
      <div className="contenedorMobile">
        <div className="login">
          <div className="login__google">
            <h2>Iniciar Sesión</h2>
            <button type="button" onClick={loginGoogle}>
              <img src={google} alt="" />
              Continuar con Google
            </button>
          </div>

          <form className="login__form" onSubmit={(e) => onLogin(e)}>
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
          <div className="login__register">
            <p>¿Aun no tienes una cuenta?</p>
            <span onClick={onRegister} type="submit">
              Registrarse
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
