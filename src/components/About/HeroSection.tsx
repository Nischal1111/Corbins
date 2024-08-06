import React from 'react'
import { mainFont, subFont } from '@/app/layout'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
    <div className={`${subFont.className} pt-[6rem] w-full flex items-center justify-center flex-col`}>
        <h3 className={`text-gray-400`}>Home{" > "}About</h3>
        <div className='mt-5 flex items-center gap-5'>
            <h1 className='text-2xl'>About</h1>
            <div className='w-20 h-[1px] bg-gray-400'></div>
        </div>
        {/* <Image src="/assets/aboutcorbins.webp" alt='about-main' height={2000} width={2000} className='h-[70vh] w-[95vw] rounded-lg mt-8 object-cover'/> */}
        <div className='custom-about-bg h-[90vh] w-full rounded-lg mt-8 relative'>
          <section className={`absolute left-[12%] -bottom-[17%] ${mainFont.className}`}>
            <div className='w-[30vw] h-[45vh] bg-[#F2F2F2] rounded-sm px-8 py-6 text-black'>
                <div className='mt-5 flex items-center gap-5'>
                  <h1 className='text-3xl text-[#676666]'>Our story</h1>
                  <div className='w-20 h-[1px] bg-[#676666]'></div>
                </div>
                <p className='text-sm leading-6 tracking-wider mt-4 text-justify'>Corbin's, established in 2016, has been delighting customers with its unique and flavorful dishes. Our passion for culinary excellence drives us to create memorable dining experiences. Join us and savor the taste of our carefully crafted menu. Each dish is a testament to our commitment to quality, made with fresh, locally sourced ingredients. Come and experience the warmth and hospitality that make Corbin's a beloved culinary destination.</p>
            </div>
          </section>
        </div>
    </div>
    </>
  )
}

export default HeroSection
