import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { MarketplaceProvider } from './context'
import { Inicio } from './views/inicio/Inicio'
import { Productos } from './views/productos/Productos'
import { DetalleProducto } from './views/detalle-producto/DetalleProducto'
import { IniciarSesion } from './views/iniciar-sesion/IniciarSesion'
import { RegistrarUsuario } from './views/registrar-usuario/RegistrarUsuario'
import { RegistrarProducto } from './views/registrar-producto/RegistrarProducto'
import { Carrito } from './views/carrito/Carrito'
import { MiPerfil } from './views/mi-perfil/MiPerfil'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavModel } from './components/navbar/Navbar'
import { NotFound } from "./views/404/NotFound";

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

