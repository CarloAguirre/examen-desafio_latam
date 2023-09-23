import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink, useNavigate } from "react-router-dom";
import './navbar.scss'
import { useMarketplace } from "../../context";
import Cookies from "universal-cookie";

export const NavModel = ()=> {
  const {carrito, setUser, user} = useMarketplace()
  const cookies = new Cookies()
  const token = cookies.get('token')
  const navigate = useNavigate()

  const logout = ()=>{
    setUser({})
    cookies.remove("token")
    cookies.remove("usuario")
    navigate('/') 
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container className="space-between">
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
          <Nav className="ml-auto"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/">Inicio</NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/productos">Productos</NavLink>
            {(user.nombre) ? <>
              <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/mi-perfil">Mi Perfil</NavLink>      
              <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/carrito">Carrito {carrito.length > 0 ? '('+ carrito.length + ')' : null}</NavLink>      
            </>: null}  
            {
              (!token)? <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/iniciar-sesion">Iniciar sesión</NavLink> 
              : <NavLink className={({isActive})=>(isActive ? "navLink" : "navLink")} onClick={logout}>Cerrar Sesión</NavLink> 
            }                   
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}