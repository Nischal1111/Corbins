import React from 'react'
import { subFont } from '../../app/layout';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className={`${subFont.className} pt-[6rem] w-full flex items-center justify-center flex-col`}>
        <h3 className={`text-gray-400`}>Home{" > "}Gallery</h3>
        <div className='mt-5 flex items-center gap-5'>
            <h1 className='text-2xl'>Gallery</h1>
            <div className='w-20 h-[1px] bg-gray-400'></div>
        </div>
    </div>
  )
}

export default HeroSection
