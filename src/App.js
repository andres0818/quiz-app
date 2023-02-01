import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Estadisticas from './components/Estadisticas'
import Menu from './pages/menu'
import Login from './pages/Login'
import Perfil from './components/Perfil'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Menu />} >
        <Route path='/home' element={<Home />} />
        <Route path='/home/estadisticas' element={<Estadisticas />} />
        <Route path='/home/perfil' element={<Perfil />} />
      </Route>
    </Routes>
  );
};

export default App;
