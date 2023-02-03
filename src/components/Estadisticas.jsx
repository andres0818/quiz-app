import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { mensaje, reloj } from "../icons";
import "../styles/Estadisticas.scss";

const Estadisticas = () => {

  const { dataUser, navigate, inicioSesion } = useContext(UserContext);
  const [arrayUser, setArrayUser] = useState()

  const newData = () => {
    const data = dataUser.filter(usuario => usuario.email === inicioSesion.email)
    data.map(user => setArrayUser(user))



  }

  useEffect(
    () => {
      newData()

    }
    , []
  )

  if (inicioSesion === null) return navigate("/");

  if (arrayUser) {
    const seconds = arrayUser.stats.studyTime.seconds === 0 ? 0 : arrayUser.stats.studyTime.seconds;
    const date = new Date(seconds * 1000);
    const calcTimeDifference = (dateString) => {
      const currentDate = new Date();
      const difference = currentDate - dateString;

      const diffInMinutes = difference / 60000;
      const hours = Math.floor(diffInMinutes / 60);
      const minutes = Math.trunc(diffInMinutes % 60);

      return `${hours}:${minutes}`;
    };

    const tiempo = calcTimeDifference(date);
    const correcto = arrayUser.stats.badAnswers;
    const inCorrecto = arrayUser.stats.goodAnswers;


    return (
      <div className="estadísticas">
        <h1 className="estadísticas__titulo">Estadísticas</h1>
        <select className="estadísticas__selector" name="" id="">
          <option className="estadísticas__option" value="">
            Ultimo dia
          </option>
          <option className="estadísticas__option" value="">
            Ultimos 7 dias
          </option>
          <option className="estadísticas__option" value="">
            Ultimo mes
          </option>
        </select>

        <div className="estadísticas__contenedor">
          <img className="estadísticas__icon" src={reloj} alt="time" />
          <h4 className="estadísticas__info">Tiempo de estudio (horas)</h4>
          <h4>{tiempo}</h4>
        </div>
        <div className="estadísticas__contenedor">
          <img className="estadísticas__icon" src={mensaje} alt="time" />
          <h4 className="estadísticas__info">Respuestas contestadas</h4>
          <h4>{correcto + inCorrecto}</h4>
        </div>
        <div className="estadísticas__contenedor">
          <img className="estadísticas__icon" src={mensaje} alt="time" />
          <h4 className="estadísticas__info">Respuestas contestadas</h4>
          <h4 className="estadísticas__correcto">{correcto}</h4>
        </div>
        <div className="estadísticas__contenedor">
          <img className="estadísticas__icon" src={mensaje} alt="time" />
          <h4 className="estadísticas__info">Respuestas contestadas</h4>
          <h4 className="estadísticas__incorrecto">{inCorrecto}</h4>
        </div>
      </div>
    );
  }
};

export default Estadisticas;
