import React from 'react'
import { subFont } from '../../app/layout';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className={`${subFont.className} w-full flex items-center justify-center flex-col`}>
        <div className='mt-5 flex items-center gap-5'>
            <h1 className='text-2xl'>Gallery</h1>
            <div className='w-20 h-[1px] bg-gray-400'></div>
        </div>

        <div className='flex flex-col gap-3 items-center mt-8'>
          <h2 className='font-semibold text-gray-400'>Follow along</h2>
          <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
            <div className='flex gap-4 items-center relative'>
              <div className='w-60 h-[1px] bg-gray-400'></div>
              <AiFillInstagram size={40}/>
              <h2 className='text-4xl font-extralight tracking-widest custom-link'>Corbins_</h2>
              <div className='w-60 h-[1px] bg-gray-400'></div>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default HeroSection
