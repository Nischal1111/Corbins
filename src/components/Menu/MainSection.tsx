import React from 'react'
import Image from 'next/image'
import { mainFont } from '@/app/layout'

const MainSection = () => {
  return (
    <main className={`my-4 lg:mt-[7rem] mb-20 justify-center flex flex-col items-center lg:gap-0 gap-20 pb-8 ${mainFont.className}`}>

        <section className='flex w-[90%] lg:flex-row flex-col relative mt-8 h-[50vh] items-center'>
            <main className='lg:w-[60%] w-full'>
                <Image src="/assets/menus/food-menu.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </main>
            <main className=' relative lg:w-[50%] w-full lg:top-0 top-[-20%]  lg:-left-[12%] left-0 '>
                <div className='bg-[rgba(0,0,0,.7)] p-4 border-t border-r border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Food Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Embark on a culinary adventure with our meticulously curated food menu. We offer an array of dishes, each crafted with the finest ingredients and a passion for excellence. From savory appetizers and hearty main courses to decadent desserts, our menu caters to all tastes and preferences. Indulge in our signature creations or explore new and exciting flavors. Every dish is designed to provide a unique and unforgettable dining experience, making each visit a celebration of taste and culinary artistry.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button>
                </div>

            </main>
        </section>

        <section className='flex w-[90%] relative lg:mt-[10rem] mt-[4rem] mb-[4rem] h-[50vh] items-center lg:flex-row-reverse flex-col'>
            <main className='lg:w-[60%] w-full'>
                <Image src="/assets/menus/drink-menu.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </main>
            <main className=' relative lg:w-[50%] w-full lg:top-0 top-[-20%]  lg:-right-[12%] right-0 '>
                <div className='bg-[rgba(0,0,0,.7)] p-4 border-b border-l border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Drink Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Discover a world of refreshing indulgence with our expertly crafted drink menu. Whether you’re in the mood for a classic cocktail, a robust glass of wine, or a unique handcrafted beverage, our selection offers something for every palate. Savor the flavors of our signature drinks, meticulously prepared with the finest ingredients and a touch of creativity. From invigorating non-alcoholic options to exquisite spirits, our drink menu promises a delightful experience with every sip. Join us in toasting to good times and great flavors.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button>
                </div>

            </main>
        </section>

        <section className='flex w-[90%] lg:flex-row flex-col relative lg:mt-[6rem] my-12 h-[50vh] items-center '>
            <main className='lg:w-[60%] w-full'>
                <Image src="/assets/menus/degustation-foods.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </main>
            <main className='relative lg:w-[50%] w-full lg:top-0 top-[-20%]  lg:-left-[12%] left-0 '>
                <div className='bg-[rgba(0,0,0,.7)] p-4 border-y border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Degustation Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Experience the pinnacle of culinary artistry with our degustation menu, a carefully curated tasting journey that showcases the finest flavors and innovative techniques. Each course is a masterpiece, designed to complement and enhance the next, offering a harmonious progression of taste sensations. From the freshest ingredients to the most exquisite presentations, our degustation menu is a celebration of creativity and craftsmanship. Immerse yourself in this gourmet adventure, where every bite tells a story and every dish is a revelation.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button>
                </div>

            </main>
        </section>

    </main>
  )
}

export default MainSection

