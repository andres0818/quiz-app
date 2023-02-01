import React, { useContext } from 'react'
import '../styles/Perfil.scss'
import { UserContext } from '../context/UserContext'
import { auth } from '../db'
import {signOut}from 'firebase/auth'



const Perfil = () => {

  const { user,navigate } = useContext(UserContext)

   
  if (user===null) return navigate('/')

  const fotoDefaul = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
 

  const cerrarSesión =() => {
    signOut(auth)
  }

  return (
    <div className='perfil'>
      <h2>Perfil</h2>
      <div className='perfil__contenedor'>
        {user.photoURL ? <img className='perfil__foto' src={user.photoURL} alt="" /> : <img className='perfil__foto' src={fotoDefaul} alt="" />}
        {user.displayName ? <h4 className='perfil__nombre'>{user.displayName}</h4> : <h4 className='perfil__nombre'> Nombre de usuario</h4>}
        <p>{user.email}</p>
        <button onClick={cerrarSesión} className='perfil__cerrar'>Cerrar sesión</button>
      </div>
    </div>
  ) 
}

export default Perfil