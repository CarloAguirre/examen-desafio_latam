import React, { useState } from 'react'
import { useMarketplace } from '../../context'
import ControlledTabs from './ControlledTabs'
import Button from 'react-bootstrap/Button';
import './miPerfil.scss'
import { useNavigate } from 'react-router-dom';

export const MiPerfil = () => {
  const {user, productos, favoritos} = useMarketplace()
  const navigate = useNavigate()
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='user-info__container'>
      <div className='first-info-row'>
      <div>
        <div className='user-info'>
          <h3>Nombre</h3>
          <p>{user.nombre}</p>
        </div>
        <div className='user-info mb-5'>
          <h3>Mail</h3>
            <p>{user.mail}</p>
        </div>
      </div>
      <Button variant="info" className='add-product__btn' onClick={()=>{navigate('/mi-perfil/registrar-producto')}}>Agregar <br />Producto</Button>
      </div>
      <ControlledTabs handleSelect={handleSelect} index={index} pageProductos={productos} categoria={"all"} />
    </div>
  )
}
