import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { user, loginGoogle } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="contenedor">
      <div className="contenedorMobile">
        <button type="button" onClick={loginGoogle}>
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
