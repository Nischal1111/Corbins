import React from 'react'
import Image from 'next/image'
import { mainFont } from '@/app/layout'

const MainSection = () => {
  return (
    <main className={`mt-[8rem] ${mainFont.className} flex items-center flex-col justify-center`}>
        <article className='flex gap-8 w-full flex-[1]'>
            <section className='flex-[.5] flex relative' >
                <Image src="/assets/home/homeSection2.avif" alt='home' height={1000} width={1000} className='relative left-12 rounded-md w-[70%] h-3/5 object-cover'/>
                <Image src="/assets/home/homeSection1.avif" alt='home' height={1000} width={1000} className='relative right-[12%] top-[15%] rounded-md w-[70%] h-3/5 object-cover z-2 shadow-2xl'/>
            </section>

            <section className='flex w-2/5 flex-col flex-[.4] px-6 py-6'>

                <div className='mt-5 flex items-center gap-5'>
                    <h1 className='text-3xl text-white font-bold'>Corbin's: Where Every Bite Tells a Story</h1>
                    <div className='w-40 h-[1px] bg-white'></div>
                </div>

                <p className='text-base leading-7 tracking-wide mt-4 text-justify'>
                    Welcome to Corbin's, where exceptional dining meets warm hospitality. Our menu features a harmonious blend of classic and contemporary flavors, crafted 
                    with the finest ingredients to ensure every meal is a memorable experience. At Corbin's, we believe in creating more than just delicious food—we 
                    offer a space where you can savor every moment and connect with friends and family. Discover a dining experience that feels both special and inviting, 
                    where every visit is a celebration of good taste and great company. t Corbin's, we strive to create an ambiance where every meal feels like a special 
                    occasion, making each visit a memorable experience. Whether you're here for a casual meal or a special celebration, we invite you to savor the warmth and 
                    flavors that define Corbin's.
                </p>


            </section>
        </article>

        <article className='h-[80vh] w-full custom-home-scroll1 mb-[1rem] relative flex items-center justify-center z-[99]'>

            <div className='flex flex-[1] items-center gap-8 absolute black rounded-lg shadow-2xl h-auto w-[70%] z-[100] bg-[rgba(0,0,0,.9)] p-16 top-[80%] custom-coffee'>
                <div className='flex-[.7]'>
                    <div className='mt-5 flex items-center gap-5'>
                        <h1 className='text-3xl text-white font-bold'>Corbin's: Where Every Bite Tells a Story</h1>
                        <div className='w-40 h-[1px] bg-white'></div>
                    </div>
                    <p className=' mt-8'>
                        Welcome to Corbin's, where exceptional dining meets warm hospitality. Our menu features a harmonious blend of classic and contemporary flavors, crafted 
                        with the finest ingredients to ensure every meal is a memorable experience. At Corbin's, we believe in creating more than just delicious food.
                    </p>
                    <button className='bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Explore Menu</button>
                </div>
            
                <div className='flex-[.3] h-auto'>
                    {/* <Image src="/assets/home/menu-scroll.jpg" alt='food' height={1000} width={1000} className='w-full h-full object-cover mix-blend-normal'/> */}
                </div>
            </div>
        </article>
        <article className='h-[80vh] w-full custom-home-scroll2 relative mt-[6rem]'>
        </article>

        <article className='mt-[6rem] mb-12 flex relative w-[70%] items-center justify-center flex-col'>

            <Image src="/assets/home/reserve-home.avif" alt='reserv' height={1000} width={1000} className='h-[90vh] object-cover w-1/2 rounded-lg shadow-lg self-center relative right-16 reserve-home' />
            <div className='z-[10] absolute left-[12%] w-full flex flex-col top-[15%]'>
                <p className='text-[4rem] font-extralight tracking-[12px] leading-9 relative left-[5%]'>Make a Reservation</p>
                <button className='w-fit -right-[58%] bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-12 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Make a reservation</button>
                <p className='text-[4rem] font-extralight tracking-[12px] leading-9 mt-[10%] relative right-[10%]'>Contact Us</p>
                <button className='w-fit right-[9%] bg-transparent border border-white text-white rounded-sm py-3 px-8 mt-12 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Contact Us</button>
                <p className='text-[4rem] font-extralight tracking-[12px] leading-9 relative left-[35%] mt-[10%]'>View Gallery</p>
                <button className='w-fit -right-[68%] bg-transparent border border-white text-white rounded-sm py-3 px-10 mt-12 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Gallery</button>
            </div>
        </article>
    </main>
  )
}

export default MainSection
