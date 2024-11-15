import React from 'react';
import '../styles/home.css' 
import imagem from '../assets/imagi.jpg'

const Home = () => {
  return (
    <div className="home">
     
      <div className="home-header">
        <img src={imagem} alt="Avatar" />
        <h1>Bem-vindo ao meu portfólio!</h1>
      </div>
      <p>
        Olá! Eu sou um desenvolvedor web apaixonado por construir interfaces interativas e funcionais. 
        Aqui você pode explorar meus projetos e aprender mais sobre mim.
      </p>
      
      {/* Botão de ação para navegar ou acessar outra página */}
      <a href="#projetos" className="btn">Ver meus projetos</a>
    </div>
  );
};

export default Home;
