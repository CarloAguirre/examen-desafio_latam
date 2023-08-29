import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './productos.scss'

export const Productos = () => {
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
    <div className='grid-container__principal'>
    <aside className="shadow-aside">
      <h4 className='my-4'>CATEGORIAS</h4>
      <div className="categorias">
        <p>TODAS</p>
        <p>NINTENDO</p>
        <p>PLAYSTATION</p>
        <p>SEGA</p>
        <p>ATARI</p>
      </div>
    </aside>
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {productos.map((producto, index) => {
        if (index % 6 === 0) {
          const grupoProductos = productos.slice(index, index + 6);

          return (
            <Carousel.Item key={index}>
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
  )
  }
