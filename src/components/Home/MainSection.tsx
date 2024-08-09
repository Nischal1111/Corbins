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

            <div className='flex w-[80%] items-center justify-center gap-8 absolute black rounded-lg shadow-2xl h-auto z-[100] bg-[rgba(0,0,0,.9)] p-16 top-[60%] custom-coffee'>
                <div className=''>
                    <div className='mt-5 flex items-center gap-5'>
                        <h1 className='text-3xl text-white font-bold'>Corbin's: Where Every Bite Tells a Story</h1>
                        <div className='w-40 h-[1px] bg-white'></div>
                    </div>
                    <p className='text-justify mt-8'>
                        Welcome to Corbin's, where exceptional dining meets warm hospitality. Our menu features a harmonious blend of classic and contemporary flavors, crafted 
                        with the finest ingredients to ensure every meal is a memorable experience. At Corbin's, we believe in creating more than just delicious food.
                    </p>
                    <button className='bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Explore Menu</button>
                </div>
            </div>
        </article>

        <article className='h-[90vh] w-full custom-home-scroll2 relative mt-[6rem]'>
        </article>

        <article className='flex  w-full mt-16 mb-12'>

            <div className='w-1/2'>
                <div className='custom-findUs h-[80vh] w-[50vw]'>
                    {/* <Image src={"/assets/home/findus.jpg"} alt='findUS' height={1000} width={1000} className='h-full w-full object-cover'/> */}
                </div>
            </div>


            <div className='w-1/2  p-8 flex flex-col gap-12 items-center justify-center bg-[rgb(10,11,10)]'>
                <h1 className='text-4xl font-bold tracking-widest'>Find Us</h1>

                <div className='flex items-center justify-center flex-col gap-8'>
                    <h1 className='font-extrabold text-lg'>WHERE</h1>
                    <p className='text-base font-extralight text-center'>34 Duporth Avenue,<br />
                    Maroochydore, Queensland</p>
                    <div className='flex gap-3'>
                        <button className='text-xs font-extralight bg-[rgba(255,255,255,.8)] tracking-wider px-6 py-2 text-black'>
                            VIEW MAP
                        </button>
                        <button className='text-xs font-extralight bg-black tracking-wider border border-white px-6 py-2 text-white'>
                            BOOK A TABLE
                        </button>
                    </div>
                </div>

                <div className='flex items-center justify-center flex-col gap-8'>
                    <h1 className='font-extrabold text-lg'>WHEN</h1>
                    <div className='flex gap-3 items-center justify-center'>
                <p className='text-base text-center font-extralight'>Tuesday to Thursday <br /> 12PM-Late</p>
              </div>
              <div className='flex gap-3 items-center  justify-center'>
                <p className='text-base text-center font-extralight'>Friday and Saturday <br /> 12PM to LATE</p>
              </div>
                </div>
            </div>
        </article>
    </main>
  )
}

export default MainSection
