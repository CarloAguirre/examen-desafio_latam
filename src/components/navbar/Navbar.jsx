import { Navbar, Container, Nav } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import './navbar.scss'
import { useMarketplace } from "../../context";

export const NavModel = ()=> {
  const {carrito} = useMarketplace()
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container className="space-between">
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse" className="justify-content-end">
          <Nav className="ml-auto"> 
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/">Inicio</NavLink>
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/productos">Productos</NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/mi-perfil">Mi Perfil</NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/carrito">Carrito {carrito.length > 0 ? '('+ carrito.length + ')' : null}</NavLink>      
            <NavLink className={({isActive})=>(isActive ? "active-nav" : "navLink")} to="/iniciar-sesion">Iniciar sesión</NavLink>      
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}