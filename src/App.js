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
      <Route path='/quiz-app' element={<Login />} />
      <Route path='/quiz-app/home' element={<Menu />} >
        <Route path='/quiz-app/home' element={<Home />} />
        <Route path='/quiz-app/home/estadisticas' element={<Estadisticas />} />
        <Route path='/quiz-app/home/perfil' element={<Perfil />} />
      </Route>
      <Route path='*' element={<Login />} />
    </Routes>
  );
};

export default App;
