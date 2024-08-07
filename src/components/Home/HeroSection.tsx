import { mainFont, subFont } from '@/app/layout'
import React from 'react'
import { BsDash } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <div className={`${subFont.className} pt-[6rem] w-full flex justify-center flex-col`}>
        <div className='h-[90vh] w-full rounded-lg mt-8 custom-home-bg relative'>
            <div className={`absolute ${mainFont.className} w-full top-1/3 flex flex-col items-center justify-center`}>
                <div className='flex items-center text-white gap-6'>
                    <div className='w-[8rem] h-[1px] bg-gray-300'></div>
                    <h1 className='text-5xl font-semibold tracking-widest'>Welcome to COR-BINS</h1>
                    <div className='w-[8rem] h-[2px] bg-gray-300'></div>
                </div>
                <p className='text-lg font-normal tracking-wider mt-8 leading-6 w-3/5 text-center'>Corbin's: Where flavor meets unique culinary adventure. Indulge in expertly crafted dishes that blend tradition.</p>
                <button className='bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative -left-8 tracking-widest text-base hover:bg-white hover:text-black duration-500'>Make a reservation</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
