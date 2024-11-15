import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Sobre from './components/sobre';
import Projetos from './components/projetos';
import Navbar from './components/navbar';
import Jogo from './components/jogosenha';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/jogosenha" element={<Jogo />}/>
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
