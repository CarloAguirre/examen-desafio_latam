import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ModalModel from '../modal/Modal';
import { useParams } from 'react-router-dom';

export const SliderProductos = ({handleSelect, index, pageProductos, categoria, page}) => {
  let productos = pageProductos;
  if(categoria === true){
    const {categoria}= useParams()
    if(categoria != 'all'){
      productos = productos.filter(producto=> producto.categoria === categoria)
    }
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false}>

    {productos.map((producto, productoIndex) => {
      let group = 6
      if(page === 'mi-perfil'){
        group = 3
      }
      if (productoIndex % group === 0) {
        const grupoProductos = productos.slice(productoIndex, productoIndex + group);
        
        return (
          <Carousel.Item key={productoIndex}>
            <div className="page-counter">
              {
                (page === 'mi-perfil')? <h1 className='text-light'>MIS PRODUCTOS</h1>
                                      : <h1 className='text-light'>PRODUCTOS</h1>
              }
              <h5>Página {index + 1} de {Math.round(productos.length/group)}</h5>
            </div>
            <main className={(page ==='mi-perfil')? 'main-custom' : ''}>
              {grupoProductos.map((productoGrupo) => (
                <div key={productoGrupo.id} className={`producto-${productoGrupo.id}`}>
                  <div className="producto-datos shadow">
                    <img src={`${productoGrupo.img1}`} style={{ width:'330px' }} alt={productoGrupo.nombre} />
                    <h3>{productoGrupo.nombre}</h3>
                    <p>${productoGrupo.precio}</p>
                      <ModalModel producto={productoGrupo} />
                  </div>
                </div>
              ))}
            </main>
          </Carousel.Item>
        );
      }
      return null;
    })}
  </Carousel>
  )
}