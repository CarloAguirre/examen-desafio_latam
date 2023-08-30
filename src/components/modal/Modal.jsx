import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.scss';
import { useNavigate } from 'react-router-dom';

function ModalModel({producto}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
  const irAProducto = () => {
    navigate(`/porductos/${producto.categoria}/${producto.id}`);
  };
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
            Ver más
          </Button>
          <Button variant="danger" onClick={handleClose} className="custom-modal-buttons">
            Añadir a favoritos
          </Button>
          <Button variant="warning" onClick={handleClose} className="custom-modal-buttons">
            Añadir a carrito
          </Button>
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
