import React, { useEffect, useState } from 'react'
import CarouselSlider from '../carousel/Carousel'
import './inicio.scss'

export const Inicio = () => {
  const [productos, setProductos] = useState([]);

  const carouselImages = {
    img1: ".././src/assets/xbox.jpg",
    img2: ".././src/assets/switch.jpg"
  }

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

  // const productos = JSON.parse(fs.readFileSync('.././db/productos.json'))
  // console.log(productos)
  return (  
    <>
      <CarouselSlider img1={carouselImages.img1} img2={carouselImages.img2}/>
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

      <main>
        {productos.map((producto) => (
          <div key={producto.id} className={`producto-${producto.id}`}>
            <div className="producto-datos">
              <img src={`.././src/assets/${producto.img1}`} style={{ zoom: "10%" }} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <button className="icon-button" >
                <span class="material-icons-outlined">add_circle</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      </div>
    </>
  )
}
