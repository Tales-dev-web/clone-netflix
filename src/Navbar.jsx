import { useState } from 'react'

//import css
import './css/navbar.css'

//import logo netflix
import logo from './assets/logo.netflix.png'



function Navbar() {

  return (
    <nav className='navbar'>
      <div className='container'>
         <div className='logo'>
           <img src={logo} alt='netflix'></img>
         </div>
         <div className='grupo-btn'>
           <select className='select-idioma'>
            <option>Português</option>
            <option>Inglês</option>
           </select>
            <a href='#'>Entrar</a>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
