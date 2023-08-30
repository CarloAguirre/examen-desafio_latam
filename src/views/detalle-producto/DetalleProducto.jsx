import React from 'react'
import { useParams } from "react-router-dom";
import { DetalleProducto } from '../../components/detalle-producto/DetalleProducto';
import { useMarketplace } from '../../context';

export const DetalleProductoView = () => {
  const {productos} = useMarketplace()

  const {id} = useParams()
  const selectedProducto = productos.find(producto=> producto.id === Number(id))

  return (
    <div><DetalleProducto producto={selectedProducto}/></div>
  )
}
