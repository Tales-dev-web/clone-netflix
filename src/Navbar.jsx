import { useState } from 'react'

//import css
import './css/navbar.css'

//import logo netflix
import logo from './assets/logo.netflix.png'



function Navbar() {

  return (
      /* position-absolute e top-0 para flutuar sobre a imagem de fundo */
    <nav className=" container navbar position-absolute top-0 w-100 py-3" style={{ zIndex: 1000 }}>
      <div className="container-fluid px-3 px-md-5 d-flex justify-content-between align-items-center">
        
        {/* LOGO: Tamanho responsivo usando clamp */}
        <div className="navbar-brand m-0 p-0">
          <img 
            src={logo} 
            alt="Netflix" 
            style={{ width: 'clamp(90px, 12vw, 155px)', display: 'block' }} 
          />
        </div>

        {/* GRUPO DE BOTÕES: Alinhamento vertical perfeito */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          
          {/* SELECT: Estilizado para remover sobras e alinhar com o botão */}
          <div className="d-none d-sm-block">
            <select 
              className="form-select form-select-sm bg-transparent text-white border-secondary" 
              style={{ 
                height: '34px', 
                fontSize: '14px', 
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                width: 'fit-content',
                cursor: 'pointer'
              }}
            >
              <option className="text-dark">Português</option>
              <option className="text-dark">English</option>
            </select>
          </div>

          {/* BOTÃO ENTRAR: Mesma altura do select */}
          <a 
            href="#" 
            className="btn btn-danger btn-sm fw-bold d-flex align-items-center justify-content-center" 
            style={{ 
              height: '34px', 
              padding: '0 16px', 
              fontSize: '14px',
              backgroundColor: '#e50914',
              border: 'none'
            }}
          >
            Entrar
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
