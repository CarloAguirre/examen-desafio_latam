import React from 'react'
import ModalModel from '../modal/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { useParams } from 'react-router-dom';
import { useMarketplace } from '../../context';
import { TableTemplate } from '../carrito/TableTemplate';

export const SliderProductos = ({handleSelect, index, pageProductos, categoria, page, tab}) => {
  const {user, favoritos, carrito, setCarrito} = useMarketplace()
  let productos = pageProductos;
  if(categoria === true){
    const {categoria}= useParams()
    if(categoria != 'all'){
      productos = productos.filter(producto=> producto.categoria === categoria)
    }
  }
  if(page === 'mi-perfil'){
    if(tab === 'favoritos'){
      let userFavoritos = favoritos.filter(favorito => favorito.user_id === user.id);
      if (userFavoritos.length > 0){
        let productIds = userFavoritos.map(favorito => favorito.product_id);
        productos = productos.filter(producto => productIds.includes(Number(producto.id)));
      }
    }else{
      productos = productos.filter(producto=> Number(producto.user_id) === Number(user.id))
    }
  }else if(page === 'carrito'){
    productos = carrito
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
              (page === 'mi-perfil' && tab === 'favoritos') ? (
                <h1 className='text-light'>FAVORITOS</h1>
              ) : (page === 'mi-perfil') ? (
                <h1 className='text-light'>MIS PRODUCTOS</h1>
              ): (page === 'carrito') ? (
                <h1 className='text-light'>CARRITO</h1>
              ) : (page === 'productos' || page === 'inicio') ? (
                <h1 className='text-light'>PRODUCTOS</h1>
              ) : null 
            }
              <h5>Página {index + 1} de {Math.round(productos.length/group)}</h5>
            </div>
            <main className={(page ==='mi-perfil')? 'main-custom' : ''}>
              {grupoProductos.map((productoGrupo) => (            
                <div key={productoGrupo.id}>
                  <div className="producto-datos shadow">
                    <img src={`${productoGrupo.img1}`} style={{ width:'330px' }} alt={productoGrupo.nombre} />
                    <ModalModel producto={productoGrupo} page={page}/>
                    <h3>{productoGrupo.nombre}</h3>
                    <p>${productoGrupo.precio}</p>
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
