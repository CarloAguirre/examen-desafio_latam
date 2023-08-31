import React, { useState } from 'react'
import { useMarketplace } from '../../context'
import './miPerfil.scss'
import ControlledTabs from './ControlledTabs'

export const MiPerfil = () => {
  const {user, productos} = useMarketplace()
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='user-info__container'>
      <div className='user-info'>
        <h3>Nombre</h3>
          <p>{user.nombre}</p>
      </div>
      <div className='user-info mb-5'>
        <h3>Mail</h3>
          <p>{user.mail}</p>
      </div>
      <ControlledTabs handleSelect={handleSelect} index={index} pageProductos={productos} categoria={"all"} />
    </div>
  )
}
