import React, { useState } from 'react'
import './productos.scss'
import { Aside } from './AsideProductos';
import { SliderProductos } from './SliderProductos';
import { useMarketplace } from '../../context';

export const Productos = ({page, categoria}) => {
  const {pageProductos, index, setIndex, handleSelect} = useMarketplace()

  return (
    <>
    <div className={page === 'productos'? 'grid-container__principal-productos': 'grid-container__principal'}>
      <Aside page={page} setIndex={setIndex}/>
      <SliderProductos handleSelect={handleSelect} index={index} pageProductos={pageProductos} categoria={categoria} page={page} setIndex={setIndex}/>
    </div>
      </>
  )
  }
