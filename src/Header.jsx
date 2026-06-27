import React from 'react'

//import css
import './css/header.css'

//import imagem
import img from './assets/img.header.jpg';

//import Navbar
import Navbar from './Navbar.jsx'

function Header() {
  return (
    <header className='header'>
      < Navbar />
        <div className='frase'>
          <h1>Filmes, séries e muito<br/> mais, sem limites</h1><br></br>
          <h4>A partir de R$ 20,90. Cancele quando quiser.</h4><br></br>
          <h6>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h6>
          <div className='input'>
            <input className='input-email' type='text' placeholder='Email'></input>
            <button>Vamos lá</button>
          </div>
        </div>
    </header>
  )
}

export default Header
