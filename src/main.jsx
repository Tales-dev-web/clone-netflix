import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navbar from './Navbar.jsx';

import Header from './Header.jsx';

import Section from './Section.jsx';

import Footer from './Footer.jsx';

//importar bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//import bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'

//import icons
import '@mdi/js/mdi.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Section />
    <Footer />
  </StrictMode>,
)
