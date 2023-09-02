import React from 'react'
import { useMarketplace } from '../../context';
import { TableTemplate } from './TableTemplate';
import Button from 'react-bootstrap/Button';

import './carrito.scss'


export const Carrito = () => {
  const {carrito} = useMarketplace()
  return (
    (carrito.length > 0)?
    <div className='principal-container__carrito'>
      <TableTemplate />
      <Button variant="success" className='mt-4'>PAGAR</Button>{' '}
    </div>
    :<div className='principal-container__carrito'>
      <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1693688275/cartempty_nwp2n5.webp" alt="carro-vacio" />
    </div>
  )
}
