"use client"
import React from 'react'
import Image from 'next/image'
import { mainFont, subFont } from '@/app/layout'
import { motion } from 'framer-motion'
import {fadeIn} from "../../motion/motion"

const MainSection = () => {
    const SmallBites=[
    {
      "name": "Kaarage Chicken Sweet and Sour",
      "price": 12,
      "description": "Our Special Fried Chicken Roll, served with Smoked Sriracha and Pickled Cabbage."
    },
    {
      "name": "Kaarage Cauliflower Sweet and Sour",
      "price": 20,
      "description": "Okonomiyaki Chicken & Rice, Cheeseburger Spring Roll, Pork Bao (Vegetarian on request)"
    },
    {
      "name": "Mapo Pork San Choi Bao",
      "price": 12,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Curry Prawn, Spiced Cashew Betel Leaf (2pc.)",
      "price": 12,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Soft Shell Crab Tostada, Fermented Chilli (2pc.)",
      "price": 14,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Veg Gyoza (4pc.)",
      "price": 10,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Prawn Gyoza (4pc.)",
      "price": 10,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Fried Chicken Bao, Smoked Chilli (2pc.)",
      "price": 12,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Teriyaki Mushroom Bao (2pc.)",
      "price": 12,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Korean Fish Bao, Coriander Mayo (2pc.)",
      "price": 12,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Vege Spring Roll (2pc.)",
      "price": 8,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Chicken and Mushroom Spring Roll (2pc.)",
      "price": 8,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Prawn and Ginger Dumplings (4pc.)",
      "price": 10,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Salmon Sashimi, Soy Ponzu and Chilli",
      "price": 18,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
    {
      "name": "Salmon Tostada, Wasabi Mayo, Ginger Chilli",
      "price": 18,
      "description": "Served with either Fried Chicken, Crispy Pork Belly, Teriyaki Mushroom. One of your choice. "
    },
  ]
    const BigBites=[
    {
      "name": "Tempura Eggplant, Bonito, Miso, Nori",
      "price": 18,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    },
    {
      "name": "Mushroom Pad See Ew, Pickled Chilli",
      "price": 18,
      "description": "A unique tasting menu featuring native Australian ingredients like wattleseed, finger lime, and quandong in a series of small plates."
    },{
      "name": "Sichuan Pork Wonton, Sesame Strange Flavor",
      "price": 17,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Chicken Wings, Thai Caramel, Fried Garlic",
      "price": 18,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Twice Cooked Pork Bell, Sweet and Sour",
      "price": 25,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Sichuan Beef Short Ribs, Black Beans, Kale",
      "price": 38,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Jasmin Rice",
      "price": 4,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Charred Roti, Smoked Onion Butter",
      "price": 38,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Steamed Greens, Chilli, Oyster Sauce",
      "price": 38,
      "description": "A selection of Australian BBQ favorites including ribs, sausages, and grilled prawns with a variety of sauces."
    }
    ,{
      "name": "Confit Potatoes, Fermented Chilli Butter",
      "price": 38,
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
    <main className={`my-4 lg:mt-[2rem] justify-center flex flex-col items-center lg:gap-8 gap-20 pb-12 pt-4 ${mainFont.className}`}>

        <section className=' flex flex-col w-full gap-4  relative lg:h-auto h-auto items-center'>
          <div className='flex items-center gap-5'>
                        <h1 className='lg:text-4xl text-2xl text-white pl-4'>Small Bites</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
            <motion.main  initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("right", "tween", 0.3, .8)} 
                        className='lg:w-[60%] w-full h-[40vh] lg:px-0 px-4'>
                <Image src="/assets/menus/food-menu.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </motion.main>
            <motion.main  initial="hidden"
                            whileInView="show"
                            viewport={{ once: true,amount:.25}}
                            variants={fadeIn("left", "tween", 0.3, .8)} 
                            className=' relative lg:w-[60%] w-full lg:top-0 top-[-80%]  left-0 '>
                <div className='p-4 border-r border-gray-400'>
                    
                    {/* <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Embark on a culinary adventure with our meticulously curated food menu. We offer an array of dishes, each crafted with the finest ingredients and a passion for excellence. From savory appetizers and hearty main courses to decadent desserts, our menu caters to all tastes and preferences. Indulge in our signature creations or explore new and exciting flavors. Every dish is designed to provide a unique and unforgettable dining experience, making each visit a celebration of taste and culinary artistry.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button> */}
                    {SmallBites.map((item:any)=>{
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
        <section className=' flex flex-col w-full gap-4  relative lg:h-auto h-auto items-center'>
          <div className='flex items-center gap-5'>
                        <h1 className='lg:text-4xl text-2xl text-white pl-4'>Big Bites and Side Dishes</h1>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>
            <motion.main  initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.25}}
                        variants={fadeIn("right", "tween", 0.3, .8)} 
                        className='lg:w-[60%] w-full h-[40vh] lg:px-0 px-4'>
                <Image src="/assets/menus/menufood2.avif" alt='menu' height={1000} width={1000} className='w-full h-full object-cover'/>
            </motion.main>
            <motion.main  initial="hidden"
                            whileInView="show"
                            viewport={{ once: true,amount:.25}}
                            variants={fadeIn("left", "tween", 0.3, .8)} 
                            className=' relative lg:w-[60%] w-full lg:top-0 top-[-80%]  left-0 '>
                <div className='p-4 border-r border-gray-400'>
                    
                    {/* <p className='px-4 lg:text-sm text-xs leading-6 tracking-wider text-justify mt-4'>
                        Embark on a culinary adventure with our meticulously curated food menu. We offer an array of dishes, each crafted with the finest ingredients and a passion for excellence. From savory appetizers and hearty main courses to decadent desserts, our menu caters to all tastes and preferences. Indulge in our signature creations or explore new and exciting flavors. Every dish is designed to provide a unique and unforgettable dining experience, making each visit a celebration of taste and culinary artistry.
                    </p>
                    <button className='bg-zinc-300 text-black rounded-sm py-2 px-4 mt-8 ml-4 tracking-widest text-xs hover:bg-gray-400 duration-500'>View Menu</button> */}
                    {BigBites.map((item:any)=>{
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


        <section className='flex w-[90%]  gap-4 lg:flex-row flex-col relative lg:mt-[10rem] lg:h-[50vh] h-auto items-center '>
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
                    {BigBites.map((item:any)=>{
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

