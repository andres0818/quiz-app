import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Estadisticas from "./components/Estadisticas";
import Menu from "./pages/menu";
import Login from "./pages/Login";
import Perfil from "./components/Perfil";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Menu />}>
        <Route path="/home/estadisticas" element={<Estadisticas />} />
        <Route path="/home/perfil" element={<Perfil />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
