import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { MarketplaceProvider } from './context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavModel } from './components/navbar/Navbar'
import {
  Inicio,
  Productos,
  DetalleProducto,
  IniciarSesion,
  RegistrarUsuario,
  RegistrarProducto,
  Carrito,
  MiPerfil,
  NotFound
} from './views'

function App() {

  return (
    <div >
    <MarketplaceProvider>

    <BrowserRouter>
      <NavModel />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/porductos/:categoria/:producto" element={<DetalleProducto />}/>
        <Route path="/iniciar-sesion" element={<IniciarSesion />}/>
        <Route path="/registrar-usuario" element={<RegistrarUsuario />}/>
        <Route path="/mi-perfil" element={<MiPerfil />}/>
        <Route path="/registrar-producto" element={<RegistrarProducto />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>

    </MarketplaceProvider>
 
  </div>
  )
}
export default App;

