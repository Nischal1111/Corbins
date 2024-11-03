import React from 'react'
import HeroSection from './HeroSection'
import MainSection from './MainSection'

const Home = () => {
  return (
    <div className='bg-[#0d0d0d] text-white lg:px-16 px-1 mt-16 lg:mt-0'>
        <HeroSection/>
        <MainSection/>
    </div>
  )
}

export default Home
