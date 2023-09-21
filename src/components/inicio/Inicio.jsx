import React from 'react'
import CarouselSlider from '../carousel/Carousel'
import './inicio.scss'
import { Productos } from '../productos/Productos'

export const Inicio = () => {

  const carouselImages = {
    img1: "https://res.cloudinary.com/dezwpnks0/image/upload/v1694276988/switch_wv4vn7.webp",
    img2: "https://res.cloudinary.com/dezwpnks0/image/upload/v1694276988/xbox_jdnrak.webp"
  }

  return (  
    <>
      <CarouselSlider img1={carouselImages.img1} img2={carouselImages.img2}/>
      <Productos page={'inicio'}/>
    </>
  )
}
