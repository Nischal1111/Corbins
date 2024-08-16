import React from 'react'
import HeroSection from './HeroSection'
import ImageGrid from "./ImageGrid"

const Gallery = () => {
  return (
    <main className='mt-16 lg:mt-0 text-white lg:px-20 px-1'>
        <HeroSection/>
        <ImageGrid/>
    </main>
  )
}

export default Gallery
