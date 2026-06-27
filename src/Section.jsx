import React from 'react'

//import css
import './css/section.css';

//import imagem
import jurassic from './assets/jurassic.webp'

import vikigns from './assets/vikigns.webp'

import predador from './assets/predador.webp'

import magica from './assets/como-magica.webp'


 function Section() {
  return (
    <>
     <section className='d-flex align-items-center'>
      <div className='container'>

        <div className='row d-flex align-items-center' >
          <div className='col-6'>
            <h2>Aproveite na TV</h2>
            <h3>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h3>
          </div>
          <div className='col-6 d-flex justify-content-center'><img src={jurassic} alt='imagem' /></div>
        </div>
      </div>
    </section>

     <section className='d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
           <div className='col-6 d-flex justify-content-center'><img src={vikigns} alt='imagem' /></div>
           <div className='col-6'>
            <h2>Baixe séries para assistir offline</h2>
            <h3>Salve seus títulos favoritos e sempre tenha algo para assistir.</h3>
          </div>
        </div>
      </div>
    </section>

    <section className='d-flex align-items-center'>
      <div className='container'>

        <div className='row d-flex align-items-center' >
          <div className='col-6'>
            <h2>Assista onde quiser</h2>
            <h3>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</h3>
          </div>
          <div className='col-6 d-flex justify-content-center'><img src={predador} alt='imagem' /></div>
        </div>

      </div>
    </section>


     <section className='d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
           <div className='col-6 d-flex justify-content-center ' ><img src={magica} alt='imagem' /></div>
           <div className='col-6'>
            <h2>Crie perfis para crianças</h2>
            <h3>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h3>
          </div>
        </div>
      </div>
    </section>


<section>
      <div class="accordion container" id="accordionExample">
        <h4>Perguntas frequentes</h4>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="collapseOne">
       <h4> O que é a Netflix?</h4>
      </button>
    </h2>
    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h5>A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.
            Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.</h5>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="collapseTwo">
        <h4>Quantos custa a Netflix?</h4>
      </button>
    </h2>
    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <h5>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês.</h5>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="collapseThree">
        <h4>Onde posso assistir?</h4>
      </button>
    </h2>
    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <h5>Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
           Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.</h5>
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true" aria-controls="collapseOne">
        <h4>Como faço para cancelar?</h4>
      </button>
    </h2>
    <div id="faq4" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h5>A Netflix é flexível. Você pode cancelar a sua conta online com apenas dois cliques. Não há taxa de cancelamento. Você inicia e encerra sua assinatura quando quiser.</h5>
      </div>
    </div>
  </div>

   <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="true" aria-controls="collapseOne">
        <h4>O que eu posso assistir na Netflix?</h4>
      </button>
    </h2>
    <div id="faq5" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h5>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</h5>
      </div>
    </div>
  </div>

   <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="true" aria-controls="collapseOne">
        <h4>A Netflix é adequada para crianças?</h4>
      </button>
    </h2>
    <div id="faq6" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h5>A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.
            O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.</h5>
      </div>
    </div>
  </div>
  <br></br>

  <div className='assinatura'>
    <h6>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h6>
    <input type='text' placeholder='email'></input>
    <button>Vamos lá</button>
  </div>

 </div>
</section>


    </>

  )
  }

export default Section
