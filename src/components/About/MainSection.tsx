import { mainFont, subFont } from '@/app/layout'
import React from 'react'
import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'
import Link from 'next/link';
import { Divider } from '@nextui-org/react';

const MainSection = () => {
  return (
    <article className={`flex w-full px-12 gap-24 ${mainFont.className} relative -mb-32`}>
      <main className='relative flex flex-col flex-start w-[50%]'>
        
        <Image src="/assets/about2.jpg" alt="image1" height={1000} width={1000} className='w-full h-80% mt-[40%] object-cover'/>

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

        <Image src="/assets/about-food.avif" alt='about-food' height={1000} width={1000} className='w-full mt-[8%] h-[70vh] object-cover'/>

      </main>

        {/* right section  */}

      <main className='w-[50%] flex flex-col relative'>

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

        <Image src="/assets/about3.webp" alt="image1" height={1000} width={1000} className='w-full h-[70vh] mt-6 object-cover'/>

        <div className='py-12 flex justify-center flex-col'>
          <div className='mt-5 flex items-center gap-5'>
                <h1 className='text-3xl text-white'>Our Socials</h1>
                <div className='w-20 h-[1px] bg-white'></div>
          </div>
          <p className='text-sm leading-6 tracking-wider mt-6 text-justify text-gray-300 w-[90%]'>
            Stay connected with Corbin's through our social media channels! Follow us for the latest updates, mouth-watering photos, and behind-the-scenes glimpses of our culinary 
            creations. Join our community and be the first to know about special events, new menu items, and exclusive promotions.
          </p>

          <div className='flex gap-4 items-center mt-20'>
            <p className='text-xl tracking-wider'>#Corbins</p>
              <div className='flex gap-5 items-center'>
                <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
                            <AiFillInstagram size={26}/>
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.facebook.com/corbinskitchenandwinebar/" target='_blank'>
                            <FaFacebook size={22}/>
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.tripadvisor.com.au/Restaurant_Review-g499672-d7394406-Reviews-Corbin_s-Maroochydore_Sunshine_Coast_Queensland.html" target='_blank'>
                            <FaTripadvisor size={22}/>
                        </Link>
            </div>
          </div>
        </div>

      </main>
    </article>
  )
}

export default MainSection
