import React, { useState } from 'react'
import { SliderProductos } from '../productos/SliderProductos'
import { useMarketplace } from '../../context';

export const Carrito = () => {
  const {productos} = useMarketplace()
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <SliderProductos handleSelect={handleSelect} index={index} pageProductos={productos} page={'carrito'} />
  )
}
