import React, { useState } from 'react';
import '../styles/jogosenha.css'

const JogoSenha = () => {
  const [senha, setSenha] = useState(generateSenha());
  const [tentativas, setTentativas] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const [feedback, setFeedback] = useState('');


  function generateSenha() {
    let senha = '';
    for (let i = 0; i < 4; i++) {
      senha += Math.floor(Math.random() * 10);
    }
    return senha;
  }

  
  function verificarTentativa(tentativa) {
    let bulls = 0;
    let cows = 0;
    let senhaArray = senha.split('');
    let tentativaArray = tentativa.split('');

  
    for (let i = 0; i < 4; i++) {
      if (tentativaArray[i] === senhaArray[i]) {
        bulls++;
        senhaArray[i] = tentativaArray[i] = null; 
      }
    }

   
    for (let i = 0; i < 4; i++) {
      if (tentativaArray[i] !== null) {
        const idx = senhaArray.indexOf(tentativaArray[i]);
        if (idx !== -1) {
          cows++;
          senhaArray[idx] = null; 
        }
      }
    }

    return { bulls, cows };
  }


  const handleTentativa = () => {
    if (tentativa.length !== 4 || isNaN(tentativa)) {
      alert('Por favor, insira um número de 4 dígitos');
      return;
    }
    const { bulls, cows } = verificarTentativa(tentativa);
    setFeedback(`Bulls: ${bulls}, Cows: ${cows}`);
    

    setTentativas([
      { tentativa, feedback: `Bulls: ${bulls}, Cows: ${cows}` },
      ...tentativas
    ]);
    
    setTentativa('');
  };

  const mostrarSenha = () => {
    alert(`A senha secreta é: ${senha}`);
  };

  return (
    <div className="jogo-senha-container">
      <div className="jogo-senha-descricao">
        <h3>Como funciona o Jogo Senha?</h3>
        <p>
          O Jogo Senha é um jogo de adivinhação onde o objetivo é descobrir a combinação secreta de 4 dígitos.
          A cada tentativa, você receberá um feedback indicando quantos números acertou na posição certa (Bulls)
          e quantos números estão corretos, mas na posição errada (Cows). O jogo continua até que você consiga adivinhar a senha!
        </p>
      </div>

      <div className="jogo-senha">
        <h2>Jogo Senha</h2>
        <div>
          <input
            type="text"
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value)}
            maxLength="4"
            placeholder="Digite uma tentativa"
          />
          <button onClick={handleTentativa}>Tentar</button>
        </div>

        <div>
          <h3>Feedback: {feedback}</h3>
        </div>

        <div>
          <h3>Tentativas anteriores:</h3>
          <ul>
            {tentativas.map((item, index) => (
              <li key={index}>
                Tentativa: {item.tentativa} - {item.feedback}
              </li>
            ))}
          </ul>
        </div>

        <button onClick={mostrarSenha}>Mostrar Senha</button>
      </div>
    </div>
  );
};

export default JogoSenha;
