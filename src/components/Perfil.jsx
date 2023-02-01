import React, { useContext } from 'react'
import '../styles/Perfil.scss'
import { UserContext } from '../context/UserContext'


const Perfil = () => {

  const { user } = useContext(UserContext)

  console.log(user);

  const perfilFoto = user.photoURL
  const fotoDefaul = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
  const nombre = user.displayName
  const correo = user.email


  return (
    <div className='perfil'>
      <h2>Perfil</h2>
      <div className='perfil__contenedor'>
        {perfilFoto ? <img className='perfil__foto' src={perfilFoto} alt="" /> : <img className='perfil__foto' src={fotoDefaul} alt="" />}
        {nombre ? <h4 className='perfil__nombre'>{nombre}</h4> : <h4 className='perfil__nombre'> Nombre de usuario</h4>}
        <p>{correo}</p>
        <button className='perfil__cerrar'>Cerrar sesión</button>
      </div>
    </div>
  )
}

export default Perfil