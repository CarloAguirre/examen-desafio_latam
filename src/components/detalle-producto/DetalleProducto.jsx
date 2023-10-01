import React from 'react'
import './detalleProducto.scss'
import CarouselSlider from '../carousel/Carousel'
import Button from 'react-bootstrap/Button';
import { useMarketplace } from '../../context';

export const DetalleProducto = ({producto}) => {
  const {carrito, setCarrito} = useMarketplace()
  const addCarrito = () => {
    const productoId = producto.id
    const isProductoInCarrito = carrito.some((item) => item.id === productoId)

    if (!isProductoInCarrito) {
      setCarrito([...carrito, { ...producto, qty: 1 }])
      alert('Producto añadido con éxito!')
    } else {
      alert('Este producto ya se encuentra en el carrito.')
    }
  };
  return (
    <div className='principal-container__producto'>
      <div className='carousel-container'>
        <CarouselSlider img1={producto.img1} img2={producto.img2} />
      </div>
      <div className='producto-descripcion'>
          <img src={producto.img2} alt="logo_producto" style={{width: '30%'}}/>
          <div className='producto-details'>
            <h1 className='mb-4'>{producto.nombre}</h1>
              <p>{producto.descripcion}</p>
              <div className='precio-container'>
                <h2>PRECIO <span>${producto.precio}</span></h2>
              </div>
          </div>
      <Button variant="info" className='add-carrito__btn' onClick={addCarrito}>Agregar <br />al carrito</Button>
      </div>
    </div>
  )
}
