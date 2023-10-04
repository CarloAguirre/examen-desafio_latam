import React from 'react'
import { useMarketplace } from '../../context';
import { TableTemplate } from './TableTemplate';
import Button from 'react-bootstrap/Button';

import './carrito.scss'


export const Carrito = ({page}) => {
  const {carrito} = useMarketplace()
  return (
    (carrito.length > 0)?
    <div className={page === 'inicio'? 'principal-container__carrito carrito-scale': 'principal-container__carrito' }>
      <TableTemplate />
      <Button variant="success" className='mt-4 table-custom'>PAGAR</Button>{' '}
    </div >
    :<div className={page === 'inicio'? 'principal-container__carrito carrito-scale__empty my-4': 'principal-container__carrito' }>
      <img src="https://res.cloudinary.com/dezwpnks0/image/upload/v1693688275/cartempty_nwp2n5.webp" alt="carro-vacio" className={page === 'inicio'? 'custom-img': null }/>
    </div>
  )
}
