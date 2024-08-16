import React from 'react'
import { mainFont, subFont } from '@/app/layout'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <div className={`${subFont.className} w-full flex items-center justify-center flex-col`}>
        <div className='mt-5 flex items-center gap-5'>
                <div className='lg:w-20 lg:hidden flex w-8 h-[1px] bg-gray-400'></div>
                <h1 className='lg:text-2xl text-xl'>About</h1>
                <div className='lg:w-20 w-8 h-[1px] bg-gray-400'></div>
        </div>
        <div className='custom-about-bg lg:h-[90vh] h-[60vh] w-full rounded-lg mt-8 relative flex items-center justify-center'>
          <section className={`absolute lg:left-[12%] left-[10%] -bottom-[17%] ${mainFont.className} flex items-center justify-center`}>
            <div className='lg:w-[30vw] w-[80vw] lg:h-[45vh] h-auto bg-[#F2F2F2] rounded-sm px-8 py-6 text-black'>
              <div className='mt-5 flex items-center gap-5'>
                <h1 className='lg:text-3xl text-2xl text-[#676666]'>Our story</h1>
                <div className='w-20 h-[1px] bg-[#676666]'></div>
              </div>
              <p className='lg:text-sm text-xs lg:leading-6 leading-5 tracking-wider mt-4 text-justify'>
                Corbin&apos;s, established in 2016, has been delighting customers with its unique and flavorful dishes. Our passion for culinary excellence drives us to create memorable dining experiences. Join us and savor the taste of our carefully crafted menu. Each dish is a testament to our commitment to quality, made with fresh, locally sourced ingredients. Come and experience the warmth and hospitality that make Corbin&apos;s a beloved culinary destination.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default HeroSection
