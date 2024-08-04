import { mainFont, subFont } from '@/app/layout'
import React from 'react'
import Image from 'next/image'

const MainSection = () => {
  return (
    <article className={`flex w-full px-12 gap-24 ${mainFont.className} relative`}>
      <main className='relative top-[-22vh] flex flex-col flex-start w-[50%]'>

        <section className='relative left-24'>
          <div className='w-[30vw] h-[45vh] bg-[#F2F2F2] rounded-sm px-8 py-6 text-black'>
              <div className='mt-5 flex items-center gap-5'>
                <h1 className='text-3xl text-[#676666]'>Our story</h1>
                <div className='w-20 h-[1px] bg-[#676666]'></div>
              </div>
              <p className='text-sm leading-6 tracking-wider mt-4 text-justify'>Corbin's, established in 2016, has been delighting customers with its unique and flavorful dishes. Our passion for culinary excellence drives us to create memorable dining experiences. Join us and savor the taste of our carefully crafted menu. Each dish is a testament to our commitment to quality, made with fresh, locally sourced ingredients. Come and experience the warmth and hospitality that make Corbin's a beloved culinary destination.</p>
          </div>
        </section>

        <Image src="/assets/about2.jpg" alt="image1" height={1000} width={1000} className='w-full h-full mt-20'/>

        <div className='py-12'>
          <div className='mt-5 flex items-center gap-5'>
                <h1 className='text-3xl text-white'>Our Team</h1>
                <div className='w-20 h-[1px] bg-white'></div>
          </div>
          <p className='text-sm leading-6 tracking-wider mt-6 text-justify text-gray-300 w-[90%]'>
            At Corbin's, our team is dedicated to delivering exceptional dining experiences. Our talented chefs craft each dish with creativity and precision, using the freshest 
            ingredients. Our friendly front-of-house staff ensures every guest feels welcomed and valued. Together, we are committed to excellence and creating 
            memorable moments for our customers. Join us and experience the passion and dedication that define our team at Corbin's.
          </p>
        </div>

        <Image src="/assets/about-food.avif" alt='about-food' height={1000} width={1000} className='w-full mt-[30%] h-full'/>

      </main>

        {/* right section  */}

      <main className='w-[50%] flex flex-col'>

        <Image src="/assets/chef.avif" alt='chef' height={1000} width={1000} className='w-full h-[25%] mt-16 object-cover'/>

        <div className='py-12'>
          <div className='mt-5 flex items-center gap-5'>
                <h1 className='text-3xl text-white'>Our Mission</h1>
                <div className='w-20 h-[1px] bg-white'></div>
          </div>
          <p className='text-sm leading-6 tracking-wider mt-6 text-justify text-gray-300'>
            Welcome to Corbin's, where culinary passion meets unforgettable dining experiences. Established in 2016, Corbin's has quickly become a beloved destination for food 
            enthusiasts seeking unique and flavorful dishes. Our chefs are dedicated to crafting a menu that celebrates fresh, locally sourced ingredients, and innovative recipes that 
            tantalize the taste buds.
          </p>
          <p className='text-sm leading-6 tracking-wider mt-6 text-justify text-gray-300'>
            At Corbin's, we believe that dining is more than just a meal—it's an experience. From the warm, inviting ambiance of our restaurant to the exceptional service provided by our staff, every detail is designed to make you feel at home. Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, Corbin's promises a memorable culinary journey.
            Thank you for choosing Corbin's. We look forward to serving you and sharing our passion for great food.
          </p>
        </div>

        <Image src="/assets/about3.webp" alt="image1" height={1000} width={1000} className='w-full h-[65vh] mt-6 object-cover'/>

      </main>
    </article>
  )
}

export default MainSection
