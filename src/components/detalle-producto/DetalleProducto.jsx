import React from 'react'
import './detalleProducto.scss'
import CarouselSlider from '../carousel/Carousel'
export const DetalleProducto = ({producto}) => {

  return (
    <div className='principal-container__producto'>
      <div className='carousel-container'>
        <CarouselSlider img1={producto.img1} img2={producto.img2} />
      </div>
      <div className='producto-descripcion'>
          <img src={producto.img2} alt="logo_producto" style={{width: '30%'}}/>
          <div className='producto-details'>
            <h1 className='mb-4'>{producto.nombre}</h1>
              <p>{producto.desc}</p>
              <div className='precio-container'>
                <h2>PRECIO <span>${producto.precio}</span></h2>
              </div>
          </div>
      </div>
    </div>
  )
}
