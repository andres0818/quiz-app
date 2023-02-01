import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { mensaje, reloj } from '../icons'
import '../styles/Estadisticas.scss'

const Estadisticas = () => {

  const { navigate,user } = useContext(UserContext)

  if (user===null) return navigate('/')


  const tiempo = 1
  const correcto = 20
  const inCorrecto = 20

  return (
    <div className='estadísticas'>
      <h1 className='estadísticas__titulo'>Estadísticas</h1>
      <select className='estadísticas__selector' name="" id="">
        <option className='estadísticas__option' value="">Ultimo dia</option>
        <option className='estadísticas__option' value="" selected>Ultimos 7 dias</option>
        <option className='estadísticas__option' value="">Ultimo mes</option>
      </select>

      <div className='estadísticas__contenedor'>
        <img className='estadísticas__icon' src={reloj} alt="time" />
        <h4 className='estadísticas__info' >Tiempo de estudio (horas)</h4>
        <h4>{tiempo}</h4>
      </div>
      <div className='estadísticas__contenedor'>
        <img className='estadísticas__icon' src={mensaje} alt="time" />
        <h4 className='estadísticas__info' >Respuestas contestadas</h4>
        <h4>{correcto + inCorrecto}</h4>
      </div>
      <div className='estadísticas__contenedor'>
        <img className='estadísticas__icon' src={mensaje} alt="time" />
        <h4 className='estadísticas__info' >Respuestas contestadas</h4>
        <h4 className='estadísticas__correcto'>{correcto}</h4>
      </div>
      <div className='estadísticas__contenedor'>
        <img className='estadísticas__icon' src={mensaje} alt="time" />
        <h4 className='estadísticas__info' >Respuestas contestadas</h4>
        <h4 className='estadísticas__incorrecto'>{inCorrecto}</h4>
      </div>
    </div>
  )
}

export default Estadisticas