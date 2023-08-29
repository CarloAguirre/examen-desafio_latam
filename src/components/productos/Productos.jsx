import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './productos.scss'

export const Productos = ({page}) => {
  const [productos, setProductos] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const response = await fetch('src/db/productos.json');
        const data = await response.json();
        setProductos(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    }

    fetchProductos();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <div className={page === 'productos' ? 'grid-container__principal-productos' : 'grid-container__principal'}>
    <aside className="shadow-aside">
      {
        (page=== 'productos')? <h4 className='my-4'>FILTROS</h4>
                             : <h4 className='my-4'>CATEGORIAS</h4>
      }
      <div className={page === 'productos' ? 'categorias-productos' : 'categorias'}>
        <p>TODAS</p>
        <p><img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330540/Nintendo_red_logo.svg_ygqlsr.webp" alt="nintendo_logo" />  NINTENDO</p>
        <p> <img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330539/Playstation_logo_colour.svg_jpnqwn.webp" alt="logo_playstation" /> PLAYSTATION</p>
        <p><img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330539/sega_abtjgg.webp" alt="logo_sega" /> SEGA</p>
        <p><img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330540/atari_logo_by_dhlarson_d5qqh2n-fullview_fjpwjc.webp" alt="atari_logo" /> ATARI</p>
      </div>
    </aside>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {productos.map((producto, productoIndex) => {
        if (productoIndex % 6 === 0) {
          const grupoProductos = productos.slice(productoIndex, productoIndex + 6);
          
          return (
            <Carousel.Item key={productoIndex}>
              <div className="page-counter">
                <h1 className='text-light'>PRODUCTOS</h1>
                Página {index + 1} de {Math.round(productos.length/6)}
              </div>
              <main>
                {grupoProductos.map((productoGrupo) => (
                  <div key={productoGrupo.id} className={`producto-${productoGrupo.id}`}>
                    <div className="producto-datos shadow">
                      <img src={`.././src/assets/${productoGrupo.img1}`} style={{ zoom: "13%" }} alt={productoGrupo.nombre} />
                      <h3>{productoGrupo.nombre}</h3>
                      <p>${productoGrupo.precio}</p>
                      <button className="icon-button">
                        <span className="material-icons-outlined">add_circle</span>
                      </button>
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
  </div>
      </>
  )
  }
