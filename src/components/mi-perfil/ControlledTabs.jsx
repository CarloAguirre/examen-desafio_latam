import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { SliderProductos } from '../productos/SliderProductos';
import './MiPerfil.scss'
function ControlledTabs({handleSelect, index, pageProductos, favoritos}) {
  const [key, setKey] = useState('home');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Mis Publicaciones">
        <div className='slider-wrapper'>
          <SliderProductos handleSelect={handleSelect} index={index} pageProductos={pageProductos} categoria={"all"} page={"mi-perfil"} tab={key === 'profile' ? 'favoritos' : ''}/>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Favoritos">
        <div className='slider-wrapper'>
          <SliderProductos handleSelect={handleSelect} index={index} pageProductos={pageProductos} categoria={"all"} page={"mi-perfil"} tab={key === 'profile' ? 'favoritos' : ''}/>
        </div>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;