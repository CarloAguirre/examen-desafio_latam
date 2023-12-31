import "bootstrap/dist/css/bootstrap.min.css";
import { MarketplaceProvider } from './context'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { NavModel } from './components/navbar/Navbar'
import {
  InicioView,
  ProductosView,
  DetalleProductoView,
  IniciarSesionView,
  RegistrarUsuarioView,
  RegistrarProductoView,
  CarritoView,
  MiPerfilView,
  NotFoundView,
} from './views'
import { Footer } from "./components/footer/Footer";


function App() {
  return (
    <div>
    <MarketplaceProvider>

    <BrowserRouter>
      <NavModel />
      <Routes>
        <Route path="/" element={<InicioView />}/>
        <Route path="/productos" element={<ProductosView />}/>
        <Route path="/productos/:categoria/:id" element={<DetalleProductoView />}/>
        <Route path="/productos/:categoria" element={<ProductosView categoria={true}/>}/>
        <Route path="/iniciar-sesion" element={<IniciarSesionView />}/>
        <Route path="/iniciar-sesion/registration" element={<RegistrarUsuarioView />}/>
        <Route path="/mi-perfil" element={<MiPerfilView />}/>
        <Route path="/mi-perfil/registrar-producto" element={<RegistrarProductoView />}/>
        <Route path="/carrito" element={<CarritoView />}/>
        <Route path="/*" element={<NotFoundView />}/>
      </Routes>
    </BrowserRouter>
      <Footer />

    </MarketplaceProvider>
 
  </div>
  )
}
export default App;

