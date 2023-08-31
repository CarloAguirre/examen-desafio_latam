import React from 'react'
import { Productos } from '../../components/productos/Productos'

export const ProductosView = ({categoria}) => {
  return (
    <Productos page={'productos'} categoria={categoria}/>
  )
}
