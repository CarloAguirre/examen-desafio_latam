import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useMarketplace } from '../../context';

export const TableTemplate = () => {
    const {setCarrito, carrito} = useMarketplace()
  const [totalPrice, setTotalPrice] = useState(0); 
  let currentCarrito = [...carrito];

  useEffect(() => {
    const newTotalPrice = carrito.reduce((total, producto) => {
      return total + producto.precio * producto.qty;
    }, 0);
    
    setTotalPrice(newTotalPrice);
  }, [carrito]);

  const onQTYClick = (operacion, producto) => {
    const index = currentCarrito.findIndex((item) => item.id === producto.id);

    if (index !== -1) {
      if (operacion === '+') {
        currentCarrito[index].qty += 1;
      } else {
        currentCarrito[index].qty -= 1;
        if (currentCarrito[index].qty < 1) {
          currentCarrito.splice(index, 1);
        }
      }
      setCarrito(currentCarrito);
      
    }
  };

  const onDelete = (producto) => {
    const respuesta = window.confirm(`¿Deseas eliminar el producto ${producto.nombre} del carrito?`);
    if (respuesta) {
      let currentCarrito = [...carrito];
      const index = currentCarrito.findIndex(item => item.id === producto.id);
      if (index !== -1) { 
        currentCarrito.splice(index, 1);
        setCarrito(currentCarrito);
      }
    }
  };  

  return (
    (carrito.length > 0) ? (
      <div>
        <Table striped bordered hover variant="dark" className='mt-5'>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              (producto.qty > 0) ? (
                <tr key={producto.id}  title='Haz click para eliminar'>
                  <td>
                    <img src={producto.img1} alt="producto-imagen" style={{ width: '100px' }} className='me-3' />
                    {producto.nombre}
                  </td>
                  <td>
                    <Button variant="light" className='me-2 custom-button' onClick={() => { onQTYClick('-', producto) }}>-</Button>
                    {producto.qty}
                    <Button variant="light" className='ms-2 custom-button' onClick={() => { onQTYClick('+', producto) }}>+</Button>
                  </td>
                  <td>${producto.precio}</td>
                  <td><strong>${producto.precio * producto.qty}</strong></td>
                  <td><Button variant="danger" onClick={()=>(onDelete(producto))} >Eliminar</Button></td>
                </tr>
              ) : null
            ))}
            <tr>
              <td colSpan="3" className="text-end"><strong>Total:</strong></td>
              <td><strong>${totalPrice}</strong></td>
              <td><strong></strong></td>
            </tr>
          </tbody>
        </Table>
      </div>
    ) : null
  );
};
