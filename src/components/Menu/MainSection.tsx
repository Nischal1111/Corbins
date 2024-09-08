"use client"
import React from 'react'
import Image from 'next/image'
import { mainFont, subFont } from '@/app/layout'
import { motion } from 'framer-motion'
import {fadeIn} from "../../motion/motion"

const MainSection = () => {
    const Lunch=[
    {
      "name": "Barramundi Fish Tacos",
      "price": 22.5,
      "description": "Crispy barramundi fillets with fresh mango salsa. Served in soft corn tortillas with a zesty lime aioli."
    },
    {
      "name": "Kangaroo Burger",
      "price": 25,
      "description": "Juicy kangaroo patty topped with beetroot relish and bush tomato chutney. Served with sweet potato fries."
    },
    {
      "name": "Pumpkin and Feta Salad",
      "price": 18,
      "description": "Roasted pumpkin cubes with crumbled feta cheese, mixed greens, and a balsamic glaze."
    },
    {
      "name": "Meat Pie",
      "price": 20,
      "description": "Traditional Australian meat pie filled with minced beef and gravy, served with mushy peas and tomato sauce."
    },
    {
      "name": "Chicken Parmigiana",
      "price": 24,
      "description": "Breaded chicken breast topped with marinara sauce and melted cheese. Served with a side of crispy fries."
    },
    {
      "name": "Australian BBQ Ribs",
      "price": 28,
      "description": "Tender pork ribs glazed with a smoky BBQ sauce. Accompanied by coleslaw and cornbread."
    },
    {
      "name": "Barramundi Fish Tacos",
      "price": 22.5,
      "description": "Crispy barramundi fillets with fresh mango salsa. Served in soft corn tortillas with a zesty lime aioli."
    },
  ]
    const Degus=[
    {
      "name": "Aussie BBQ Tasting Plate",
      "price": 45,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    },
    {
      "name": "Bush Tucker Experience",
      "price": 50,
      "description": "A unique tasting menu featuring native Australian ingredients like wattleseed, finger lime, and quandong in a series of small plates."
    },{
      "name": "Aussie BBQ Tasting Plate",
      "price": 45,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
  ]
    const Drinks= [
    {
      "name": "Flat White",
      "price": 4.5,
      "description": "A smooth espresso with steamed milk and a thin layer of microfoam."
    },
    {
      "name": "Long Black",
      "price": 4,
      "description": "A rich and bold espresso served with hot water."
    },
    {
      "name": "Sparkling Water",
      "price": 3,
      "description": "Chilled sparkling water served with a slice of lemon."
    },
    {
      "name": "Bundaberg Ginger Beer",
      "price": 5,
      "description": "A refreshing and spicy ginger beer with a hint of sweetness."
    },
    {
      "name": "Australian Pale Ale",
      "price": 6.5,
      "description": "A crisp and hoppy pale ale brewed locally with Australian ingredients."
    },
    {
      "name": "Chardonnay",
      "price": 8,
      "description": "A full-bodied white wine with notes of citrus and oak."
    },
    {
      "name": "Australian Pale Ale",
      "price": 6.5,
      "description": "A crisp and hoppy pale ale brewed locally with Australian ingredients."
    },
  ]
  return (
    <main className={`my-4 lg:mt-[7rem] justify-center flex flex-col items-center lg:gap-8 gap-20 pb-12 pt-12 ${mainFont.className}`}>

        <section className=' flex w-[90%] gap-4  lg:flex-row flex-col relative lg:h-[50vh] h-auto items-center'>
            <motion.main  initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("right", "tween", 0.3, .8)} 
                        className='lg:w-[50%] w-full'>
                <Image src="/assets/menus/food-menu.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </motion.main>
            <motion.main  initial="hidden"
                            whileInView="show"
                            viewport={{ once: true,amount:.25}}
                            variants={fadeIn("left", "tween", 0.3, .8)} 
                            className=' relative lg:w-[60%] w-full lg:top-0 top-[-80%]  left-0 '>
                <div className='p-4 border-r border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Food Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    {/* <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Embark on a culinary adventure with our meticulously curated food menu. We offer an array of dishes, each crafted with the finest ingredients and a passion for excellence. From savory appetizers and hearty main courses to decadent desserts, our menu caters to all tastes and preferences. Indulge in our signature creations or explore new and exciting flavors. Every dish is designed to provide a unique and unforgettable dining experience, making each visit a celebration of taste and culinary artistry.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button> */}
                    {Lunch.map((item:any)=>{
                        return(
                            <div key={item.name} className='mt-5 flex flex-col items-start w-full gap-1'>
                                <div className='flex justify-between items-center w-full'>
                                    <h1 className='text-base'>{item.name}</h1>

                                    <p className={`text-base font-semibold ${subFont.className}`}>$ {item.price}</p>
                                </div>
                                <p className='text-xs font-light text-gray-400'>{item.description}</p>
                            </div>
                        )
                    })}

                </div>

            </motion.main>
        </section>

        <section className='flex w-[90%] gap-4 relative lg:mt-[8rem] lg:h-[50vh] h-auto items-center lg:flex-row-reverse flex-col'>
            <motion.main initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("left", "tween", 0.3, .8)}  className='lg:w-[50%] w-full'>
                <Image src="/assets/menus/drink-menu.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </motion.main>
            <motion.main initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("right", "tween", 0.3, .8)}  className=' relative lg:w-[60%] w-full lg:top-0 top-[-80%] right-0 '>
                <div className=' p-4 border-l border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Drink Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    {/* <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Discover a world of refreshing indulgence with our expertly crafted drink menu. Whether you’re in the mood for a classic cocktail, a robust glass of wine, or a unique handcrafted beverage, our selection offers something for every palate. Savor the flavors of our signature drinks, meticulously prepared with the finest ingredients and a touch of creativity. From invigorating non-alcoholic options to exquisite spirits, our drink menu promises a delightful experience with every sip. Join us in toasting to good times and great flavors.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button> */}
                    {Drinks.map((item:any)=>{
                        return(
                            <div key={item.name} className='mt-5 flex flex-col items-start w-full gap-1'>
                                <div className='flex justify-between items-center w-full'>
                                    <h1 className='text-base'>{item.name}</h1>

                                    <p className={`text-base font-semibold ${subFont.className}`}>$ {item.price}</p>
                                </div>
                                <p className='text-xs font-light text-gray-400'>{item.description}</p>
                            </div>
                        )
                    })}
                </div>

            </motion.main>
        </section>

        <section className='flex w-[90%] gap-4 lg:flex-row flex-col relative lg:mt-[8rem] lg:h-[50vh] h-auto items-center '>
            <motion.main initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("right", "tween", 0.3, .8)}  className='lg:w-[50%] w-full'>
                <Image src="/assets/menus/degustation-foods.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </motion.main>
            <motion.main initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("left", "tween", 0.3, .8)}  className='relative lg:w-[60%] w-full lg:top-0 top-[-80%]  left-0 '>
                <div className=' p-4 border-r border-gray-400'>
                    <div className='mt-3 flex items-center gap-5'>
                        <h1 className='lg:text-xl text-lg text-white pl-4'>Degustation Menu</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
                    {/* <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Experience the pinnacle of culinary artistry with our degustation menu, a carefully curated tasting journey that showcases the finest flavors and innovative techniques. Each course is a masterpiece, designed to complement and enhance the next, offering a harmonious progression of taste sensations. From the freshest ingredients to the most exquisite presentations, our degustation menu is a celebration of creativity and craftsmanship. Immerse yourself in this gourmet adventure, where every bite tells a story and every dish is a revelation.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button> */}
                    {Degus.map((item:any)=>{
                        return(
                            <div key={item.name} className='mt-5 flex flex-col items-start w-full gap-1'>
                                <div className='flex justify-between items-center w-full'>
                                    <h1 className='text-base'>{item.name}</h1>

                                    <p className={`text-base font-semibold ${subFont.className}`}>$ {item.price}</p>
                                </div>
                                <p className='text-xs font-light text-gray-400'>{item.description}</p>
                            </div>
                        )
                    })}
                </div>

            </motion.main>
        </section>

    </main>
  )
}

export default MainSection

