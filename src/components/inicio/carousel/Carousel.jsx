
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../inicio.scss'

function CarouselSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=''>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="carousel-image-container">
      <img
          className="carousel-image"
          src=".././src/assets/xbox.jpg"
          alt="Primera imagen"
          />
      </div> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-container">
      <img
          className="carousel-image"
          src=".././src/assets/switch.png"
          alt="Primera imagen"
          />
      </div>  
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselSlider;