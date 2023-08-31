import React, { useState } from 'react'
import { useMarketplace } from '../../context'
import { useNavigate } from 'react-router-dom';


export const Aside = ({page}) => {
  const {setCategoria, selectedCategory, setSelectedCategory} = useMarketplace()

  const navigate = useNavigate()
  const handleCategoryClick = (categoria) => {
    setCategoria(categoria);
    setSelectedCategory(categoria);
    if(page === 'productos'){
      const irACategoria = () => {
        navigate(`/productos/${categoria}`);
      };
      irACategoria()
    }
  };
  return (
    <aside className="shadow-aside">
    {
      (page=== 'productos')? <h4 className='my-4 ms-3'> FILTROS</h4>
                           : <h4 className='my-4 ms-3'> CATEGORIAS</h4>
    }
    <div className={page === 'productos' ? 'categorias-productos' : 'categorias'}>
      <div className={`categoria ${selectedCategory === 'all' ? 'active-categoria' : ''}`} onClick={()=>handleCategoryClick('all')}>
        <div className='category-logo__wrapper'>
          <span className="material-icons-outlined" style={{zoom: '1.5'}}>
              shuffle
          </span>
        </div>
        <p >TODAS</p>
      </div>
      <div className={`categoria ${selectedCategory === 'NINTENDO' ? 'active-categoria' : ''}`} onClick={()=>handleCategoryClick('NINTENDO')}>
        <div className='category-logo__wrapper'>
          <img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330540/Nintendo_red_logo.svg_ygqlsr.webp" alt="nintendo_logo"/>
        </div>
        <p >  NINTENDO</p>  
      </div>
      <div className={`categoria ${selectedCategory === 'PLAYSTATION' ? 'active-categoria' : ''}`} onClick={()=>handleCategoryClick('PLAYSTATION')}>
        <div className='category-logo__wrapper'>
          <img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330539/Playstation_logo_colour.svg_jpnqwn.webp" alt="logo_playstation" />
        </div>
        <p >  PLAYSTATION</p>  
      </div>
      <div className={`categoria ${selectedCategory === 'SEGA' ? 'active-categoria' : ''}`} onClick={()=>handleCategoryClick('SEGA')}>
        <div className='category-logo__wrapper'>
         <img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330539/sega_abtjgg.webp" alt="logo_sega" />
        </div>
        <p > SEGA</p>  
      </div>
      <div className={`categoria ${selectedCategory === 'ATARI' ? 'active-categoria' : ''}`} onClick={()=>handleCategoryClick('ATARI')}>
        <div className='category-logo__wrapper'>
          <img src="https://res.cloudinary.com/dezwpnks0/image/upload/c_scale,w_50/v1693330540/atari_logo_by_dhlarson_d5qqh2n-fullview_fjpwjc.webp" alt="atari_logo" />
        </div>
        <p > ATARI</p>   
      </div>
    </div>
    </aside>

  )
}