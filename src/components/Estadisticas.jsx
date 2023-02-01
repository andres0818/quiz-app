import React from 'react'
import { mensaje, reloj } from '../icons'
import '../styles/Estadisticas.scss'

const Estadisticas = () => {
  const tiempo = 1
  const correcto = 20
  const inCorrecto = 20

  return (
    <div>
      <h1>Estadisticas</h1>
      <select name="" id="">
        <option value="">Ultimo dia</option>
        <option value="" selected>Ultimos 7 dias</option>
        <option value="">Ultimo mes</option>
      </select>

      <div>
        <img src={reloj} alt="time" />
        <h2>Tiempo de estudio (horas)</h2>
        <span>{tiempo}</span>
      </div>
      <div>
        <img src={mensaje} alt="time" />
        <h2>Respuestas contestadas</h2>
        <span>{correcto + inCorrecto}</span>
      </div>
      <div>
        <img src={mensaje} alt="time" />
        <h2>Respuestas contestadas</h2>
        <span>{correcto}</span>
      </div>
      <div>
        <img src={mensaje} alt="time" />
        <h2>Respuestas contestadas</h2>
        <span>{inCorrecto}</span>
      </div>
    </div>
  )
}

export default Estadisticas