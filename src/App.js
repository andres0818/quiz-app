import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Estadisticas from './pages/Estadisticas'
import Home from './pages/Home'
import Login from './pages/Login'
import Perfil from './pages/Perfil'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} >
        <Route path='/home/estadisticas' element={<Estadisticas />} />
        <Route path='/home/perfil' element={<Perfil />} />
        <Route path='*' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App