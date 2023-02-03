import React from 'react';
import '../styles/Nav.scss'
import { Link } from 'react-router-dom';
import { ecg, perfil, home } from '../icons';

const Nav = () => {
  return (
    <nav className='Nav py-3' >
      <Link className='nav__link' to='/quiz-app/home'>
        <img className='icon' src={home} alt='home' />
        <b className='link-text'>Home</b>
      </Link>
      <Link className='nav__link' to='/quiz-app/home/estadisticas'>
        <img className='icon' src={ecg} alt='estadísticas' />
        <b className='link-text'>Estadísticas</b>
      </Link>
      <Link className='nav__link' to='/quiz-app/home/perfil'>
        <img className='icon' src={perfil} alt='perfil' />
        <b className='link-text'>Perfil</b>
      </Link>
    </nav>
  );
};

export default Nav;
