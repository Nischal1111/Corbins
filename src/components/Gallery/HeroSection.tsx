import React from 'react'
import { subFont } from '../../app/layout';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className={`${subFont.className} w-full flex items-center justify-center flex-col`}>
        <div className='mt-5 lg:flex hidden items-center gap-5'>
            <h1 className='lg:text-2xl text-xl'>Gallery</h1>
            <div className='w-20 h-[1px] bg-gray-400'></div>
        </div>

        <div className='flex flex-col gap-3 items-center lg:mt-8 mt-4'>
          <h2 className='font-semibold text-gray-400'>Follow along</h2>
          <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
            <div className='flex gap-4 items-center relative'>
              <div className='w-[20vw] h-[1px] bg-gray-400'></div>
              <AiFillInstagram size={40}/>
              <h2 className='lg:text-4xl text-2xl font-extralight tracking-widest custom-link'>Corbins_</h2>
              <div className='w-[20vw] h-[1px] bg-gray-400'></div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default HeroSection
