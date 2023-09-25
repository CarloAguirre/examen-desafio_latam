import React from 'react'
import ModalModel from '../modal/Modal';
import Carousel from 'react-bootstrap/Carousel';

import { useParams } from 'react-router-dom';
import { useMarketplace } from '../../context';

export const SliderProductos = ({handleSelect, index, pageProductos, categoria, page, tab}) => {
  const {user, favoritos, categoriaId} = useMarketplace()
  let productos = pageProductos;
  if(categoria === true){
    const {categoria}= useParams()
    if(categoria != 'all'){
      productos = productos.filter(producto => Number(producto.id_categoria) === categoriaId);
    }
  }
  if(page === 'mi-perfil'){
    if(tab === 'favoritos'){
      console.log(Number(favoritos.data.favoritos[0].id_usuario))
      console.log(user.id)

        let userFavoritos = favoritos.data.favoritos.filter(favorito => Number(favorito.id_usuario) === user.id);
        
        if (userFavoritos){
          console.log('estoy aqui')
          let productIds = userFavoritos.map(favorito => favorito.id_producto);
          productos = productos.filter(producto => productIds.includes(producto.id.toString()));       
      }
    }else{
      productos = productos.filter(producto=> Number(producto.id_usuario) === Number(user.id))
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
