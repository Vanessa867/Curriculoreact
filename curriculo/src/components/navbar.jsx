import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/jogosenha">Jogo Senha</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
