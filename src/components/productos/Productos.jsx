import React, { useState } from 'react'
import './productos.scss'
import { Aside } from './AsideProductos';
import { SliderProductos } from './SliderProductos';
import { useMarketplace } from '../../context';

export const Productos = ({page, categoria}) => {
  const {pageProductos} = useMarketplace()
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <div className={page === 'productos'? 'grid-container__principal-productos': 'grid-container__principal'}>
      <Aside page={page}/>
      <SliderProductos handleSelect={handleSelect} index={index} pageProductos={pageProductos} categoria={categoria} page={page}/>
    </div>
      </>
  )
  }
