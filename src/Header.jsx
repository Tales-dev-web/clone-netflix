import React from 'react'

//import css
import './css/header.css'

//import imagem
import img from './assets/img.header.jpg';

//import Navbar
import Navbar from './Navbar.jsx'

function Header() {
  return (
     <header className='header d-flex flex-column align-items-center justify-content-center text-center text-white px-3'>
      <Navbar />
      
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8'>
            {/* Título responsivo: display-4 no desktop, fs-1 no mobile */}
            <h1 className='fw-bold display-4 mb-3'>
              Filmes, séries e muito mais, sem limites
            </h1>
            
            <h4 className='fw-normal mb-4'>
              A partir de R$ 20,90. Cancele quando quiser.
            </h4>
            
            <h6 className='mb-4'>
              Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
            </h6>

            {/* Formulário de Email Responsivo */}
            <div className='row g-2 justify-content-center'>
              <div className='col-12 col-md-7'>
                <input 
                  className='form-control form-control-lg bg-dark text-white border-secondary opacity-75' 
                  type='email' 
                  placeholder='Email' 
                  style={{ height: '60px' }}
                />
              </div>
              <div className='col-12 col-md-4'>
                <button 
                  className='btn btn-danger btn-lg w-100 h-100 fw-bold fs-4 d-flex align-items-center justify-content-center'
                >
                  Vamos lá
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
