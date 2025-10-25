import { useState } from 'react'
import Header from './componentes/Header.jsx'
import Footer from './componentes/Footer.jsx'
import Contenido from './componentes/contenido.jsx'
import Contacto from './componentes/contacto.jsx'

function App() {

  return (
    <>
      <Header />
      <Contenido />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
