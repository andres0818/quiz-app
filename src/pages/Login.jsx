import React from "react";
import { auth } from "../db";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const onLoginGoogle = async () => {
    /* app
      .auth()
      .signInWithPopup(new GoogleAuthProvider())
      .then((e) => console.log(e)); */
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contenedor">
      <div className="contenedorMobile">
        <button type="button" onClick={onLoginGoogle}>
          Continuar con Google
        </button>
        <hr />
        <form action="">
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="text"
            name="email"
            placeholder="Ingrese su correo electronico"
          />
          <label htmlFor="email">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
          />
          <button type="submit">Iniciar Sesion</button>
          <button type="submit">Registrarse</button>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Login;
