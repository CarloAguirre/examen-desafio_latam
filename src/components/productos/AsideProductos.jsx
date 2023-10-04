import React, { useState } from 'react'
import { useMarketplace } from '../../context'
import { useNavigate, useParams } from 'react-router-dom';
import { Carrito } from '../carrito/Carrito';


export const Aside = ({page, setIndex}) => {
  const {setCategoria, selectedCategory, setSelectedCategory} = useMarketplace()
  if(page === 'productos'){
    const { categoria: paramsCategory } = useParams()
    if(paramsCategory){
      setCategoria(paramsCategory)
      setSelectedCategory(paramsCategory)
    }else{
      setCategoria('all')
      setSelectedCategory('all')
    }
  }
  const navigate = useNavigate()
  const handleCategoryClick = (categoria) => {
    setCategoria(categoria);
    setSelectedCategory(categoria);
    setIndex(0)
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
      (page=== 'productos')? <h4 className='py-4 ps-3 mb-0'> FILTROS</h4>
                           : <h4 className='py-4 ps-3 mb-0'> CATEGORIAS</h4>
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

      <div className= {page === 'productos' ? 'carrito-container carrito-display__none' : 'carrito-container'}>
        <h4 className='py-4 ps-3 mb-0 carrito-label'> CARRITO</h4>
        <Carrito page={'inicio'} />
      </div>
    </div>
    </aside>

  )
}
