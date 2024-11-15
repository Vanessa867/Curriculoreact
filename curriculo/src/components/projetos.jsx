import React from 'react';
import '../styles/projeto.css'

const Projetos = () => {
  return (
    <div className="projetos-container">
      <h1 className="projetos-title">Meus Projetos</h1>
      <ul className="projetos-list">
        <li>
          <a
            href="https://github.com/Vanessa867/siteComLiv.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projeto-link"
          >
            Projeto ComLiv
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Vanessa867/Jogodadoreact.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projeto-link"
          >
            Projeto Jogo dado
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Vanessa867/Rotinareact.git"
            target="_blank"
            rel="noopener noreferrer"
            className="projeto-link"
          >
            Projeto rotina react
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projetos;
