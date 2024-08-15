import { mainFont, subFont } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { BsDash } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <div className={`${subFont.className} w-full flex justify-center flex-col`}>
        <div className='lg:h-[90vh] h-[50vh] w-full rounded-lg mt-8 custom-home-bg relative'>
            <div className={`absolute ${mainFont.className} w-full lg:top-1/3 top-[20%] flex flex-col items-center justify-center`}>
                <div className='flex items-center text-white gap-6'>
                    <div className='lg:w-[8rem] w-8 h-[2px] lg:flex hidden  bg-gray-300'></div>
                    <h1 className='lg:text-5xl text-[1.6rem] font-semibold tracking-widest'>Welcome to COR-BINS</h1>
                    <div className='lg:w-[8rem] w-8 h-[2px] bg-gray-300 lg:flex hidden'></div>
                </div>
                <p className='lg:text-lg text-sm font-normal tracking-wider lg:mt-8 mt-4 leading-6 lg:w-3/5 w-9/10 text-center'>Corbin&apos;s: Where flavor meets unique culinary adventure. Indulge in expertly crafted dishes that blend tradition.</p>
                <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                  <button className='custom-button bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Make a reservation</button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default HeroSection
