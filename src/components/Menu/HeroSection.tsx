import React from 'react'
import { mainFont, subFont,inter } from '@/app/layout'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
    <div className={`${subFont.className} w-full flex justify-center flex-col`}>
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-5 flex items-center gap-5'>
                <h1 className='text-2xl'>Menus</h1>
                <div className='w-20 h-[1px] bg-gray-400'></div>
            </div>
        </div>
        <div className='lg:h-[90vh] h-[60vh] w-full rounded-lg mt-8 custom-menu-bg relative'>
            <div className={`absolute lg:right-[5%] right-0 ${mainFont.className} lg:w-2/5 w-full lg:top-1/4 top-12`}>
                <h1 className='lg:text-4xl text-2xl font-semibold tracking-widest'>Our Menu: Culinary Delights Await.</h1>
                <p className='lg:text-lg text-sm font-extralight lg:leading-7 leading-5 tracking-wide lg:mt-6 mt-3 text-justify'>Explore a curated selection of exquisite dishes, each crafted to tantalize your taste buds. Discover your next favorite meal with our diverse and delicious menu offerings.</p>
                <button className='bg-gray-300 text-black rounded-sm py-3 px-6 mt-8 tracking-widest text-sm hover:bg-gray-400 hover:text-white duration-500'>See menu below</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeroSection


