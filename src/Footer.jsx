import React from 'react'

//import footer
import './css/footer.css'

//import bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'

function Footer() {
  return (
    <footer>
       <div className='container footer-principal'>
        <div className='row footer' >
            <div className='col-3'>
                <a href='#' >Perguntas frequentes</a>
                <a href='#' >Relações com investidores</a>
                <a href='#' >Formas de assistir</a>
                <a href='#' >Informações corporativas</a>
                <a href='#' >Só na Netflix</a>
            </div>
            <div className='col-3'>
                <a href='#' >Cental de ajuda</a>
                <a href='#' >Carreiras</a>
                <a href='#' >Termos de uso</a>
                <a href='#' >Entre em contato</a>
            </div>
            <div className='col-3'>
                <a href='#'>Conta</a>
                <a href='#'>Resgatar cartão pré-pago</a>
                <a href='#'>Privacidade</a>
                <a href='#'>Teste de velocidade</a>
            </div>
            <div className='col-3'>
                <a href='#'>Media Center</a>
                <a href='#'>Comprar cartão pré-pago</a>
                <a href='#'>Preferências de cookies</a>
                <a href='#'>Avisos legais</a>
            </div>
            <div className='idioma'>
                <select >
                    <option>Português</option>
                    <option>Inglês</option>
                </select>
            </div>

            <div className='final'>
               <h6>Netflix Brasil</h6><br></br><br/>
               <h6>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</h6>
            </div>
        </div>
       </div>
    </footer>
  )
}export default Footer
