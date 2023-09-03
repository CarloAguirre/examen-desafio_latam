import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.scss';
import { useNavigate } from 'react-router-dom';
import { useMarketplace } from '../../context';

function ModalModel({producto, page}) {
  const [show, setShow] = useState(false);
  const {setCarrito, carrito, user} = useMarketplace()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  const irAProducto = () => {
    navigate(`/productos/${producto.categoria}/${producto.id}`);
  };

  const addAction = ()=>{
    alert("Es necesaria la integracion del backend y la base de datos para la ejecución de esta acción")
  }

  const addCarrito = ()=>{
    if(!carrito.includes(producto)){
      setCarrito([...carrito, {...producto, qty: 1}])
      alert('Producto añadido con exito!')
      return
    }alert('Este producto ya se encuentra en el carrito.')
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="icon-button">
        <span className="material-icons-outlined">add_circle</span>
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <div className='modal-container'>      
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>Opciones de producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
        <Button variant="primary" onClick={irAProducto} className="custom-modal-buttons ">
            Ver más <span className="material-icons-outlined">
          open_in_browser
          </span>
          </Button>
          {((page === 'inicio' && user.nombre) || (page === 'productos' && user.nombre))? 
          <>
          <Button variant="danger" onClick={addAction} className="custom-modal-buttons">
            Añadir a favoritos <span className="material-icons-outlined">
          favorite_border
          </span>
          </Button>
          <Button variant="warning" onClick={addCarrito} className="custom-modal-buttons">
            Añadir a carrito <span className="material-icons-outlined">
          add_shopping_cart
          </span>
          </Button>  
          </> : <div className="form-text text-light">*Inicia sesion para ver mas opciones</div>}
          
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ModalModel;
