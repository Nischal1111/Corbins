import React from 'react'
import Image from 'next/image'
import { mainFont } from '@/app/layout'
import Link from 'next/link'


const MainSection = () => {
  return (
    <main className={`lg:mt-[8rem] mt-12 ${mainFont.className} flex items-center flex-col justify-center mb-12 gap-16`}>
        <article className='flex lg:flex-row flex-col gap-8 w-full'>
            <section className='w-1/2 flex-1 lg:flex lg:flex-row hidden relative' >
                <Image src="/assets/home/homeSection2.avif" alt='home' height={1000} width={1000} className='relative left-12 rounded-md w-[70%] h-3/5 object-cover'/>
                <Image src="/assets/home/homeSection1.avif" alt='home' height={1000} width={1000} className='relative right-[12%] top-[15%] rounded-md w-[70%] h-3/5 object-cover z-2 shadow-2xl'/>
            </section>

            <section className='flex flex-col lg:w-1/2 w-full lg:px-6 px-4 py-6'>
                <div className='flex flex-col lg:w-[90%] w-full'>
                    <div className='mt-5 flex items-center gap-5'>
                        <h1 className='lg:text-3xl text-2xl text-white font-bold'>Corbin&apos;s: Where Every Bite Tells a Story</h1>
                        <div className='w-40 h-[1px] bg-white'></div>
                    </div>

                    <p className='lg:text-base text-xs leading-7 tracking-wide mt-4 text-justify'>
                        Welcome to Corbin&apos;s, where exceptional dining meets warm hospitality. Our menu features a harmonious blend of classic and contemporary flavors, crafted 
                        with the finest ingredients to ensure every meal is a memorable experience. At Corbin&apos;s, we believe in creating more than just delicious food—we 
                        offer a space where you can savor every moment and connect with friends and family. Discover a dining experience that feels both special and inviting, 
                        where every visit is a celebration of good taste and great company. t Corbin&apos;s, we strive to create an ambiance where every meal feels like a special 
                        occasion, making each visit a memorable experience. Whether you&apos;re here for a casual meal or a special celebration, we invite you to savor the warmth and 
                        flavors that define Corbin&apos;s.
                    </p>

                </div>

            </section>
        </article>

        <article className='lg:h-[90vh] h-[40vh] w-full custom-home-scroll1 mb-[1rem] relative flex items-center justify-center z-[99]'>

            <div className='flex lg:w-[80%] w-full items-center justify-center gap-8 absolute black rounded-lg shadow-2xl h-auto z-[100] bg-[rgba(0,0,0,.9)] lg:p-16 px-4 py-10 top-[60%] custom-coffee'>
                <div className=''>
                    <div className='mt-5 flex items-center gap-5'>
                        <h1 className='text-3xl text-white font-bold'>Delicious Corbin&apos;s </h1>
                        <div className='lg:w-40 w-16 h-[1px] bg-white'></div>
                    </div>
                    <p className='text-justify text-xs lg:text-base lg:mt-8 mt-6'>
                        Welcome to Corbin&apos;s, where exceptional dining meets warm hospitality. Our menu features a harmonious blend of classic and contemporary flavors, crafted 
                        with the finest ingredients to ensure every meal is a memorable experience. At Corbin&apos;s, we believe in creating more than just delicious food.
                    </p>
                    <button className='bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative tracking-widest lg:text-base text-xs hover:bg-white hover:text-black duration-500'>Explore Menu</button>
                </div>
            </div>
        </article>

        <article className='lg:h-[90vh] h-[40vh] w-full custom-home-scroll2 relative lg:mt-[4rem] mt-4'>
        </article>

        <article className='flex  w-full '>

            <div className='lg:flex hidden w-1/2'>
                <div className='custom-findUs h-[80vh] w-[50vw]'>
                    {/* <Image src={"/assets/home/findus.jpg"} alt='findUS' height={1000} width={1000} className='h-full w-full object-cover'/> */}
                </div>
            </div>


            <div className='lg:w-1/2 w-full p-8 flex flex-col gap-12 items-center justify-center bg-[rgb(10,11,10)]'>
                <h1 className='text-4xl font-bold tracking-widest'>Find Us</h1>

                <div className='flex items-center justify-center flex-col gap-8'>
                    <h1 className='font-extrabold text-lg'>WHERE</h1>
                    <p className='text-base font-extralight text-center'>34 Duporth Avenue,<br />
                    Maroochydore, Queensland</p>
                    <div className='flex gap-3'>
                        <Link href={"https://www.google.com/maps/place/Corbin&apos;s+Kitchen+%26+Wine+Bar/@-26.65224,153.092499,20.13z/data=!4m10!1m2!2m1!1scorbins+au+map!3m6!1s0x6b93766272785be7:0x66e804ac836faa70!8m2!3d-26.6521784!4d153.092886!15sCg5jb3JiaW5zIGF1IG1hcFoJIgdjb3JiaW5zkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOUGJuWlFVa3BuRUFF4AEA!16s%2Fg%2F11b8tbyzpj?entry=ttu"} target='_blank'>
                            <button className='text-sm font-extralight bg-[rgba(255,255,255,.8)] tracking-widest px-7 py-3 text-black'>
                                View map
                            </button>
                        </Link>
                        <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                            <button className='text-sm font-extralight bg-black tracking-widest border border-white px-7 py-3 text-white'>
                                Book a table
                            </button>
                        </Link>
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
