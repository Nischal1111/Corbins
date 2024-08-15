import { mainFont, subFont } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook} from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const HeroSection = () => {
  return (
    <div className={`${subFont.className} w-full flex items-center justify-center flex-col`}>
        <div className='mt-5 flex items-center gap-5'>
                <div className='lg:w-20 lg:hidden flex w-8 h-[1px] bg-gray-400'></div>
                <h1 className='lg:text-2xl text-xl'>Contacts</h1>
                <div className='lg:w-20 w-8 h-[1px] bg-gray-400'></div>
            </div>
        <div className='custom-contact-bg lg:h-[90vh] h-[50vh]  w-full rounded-lg mt-8 relative flex items-start justify-center'>
          <div className={`flex gap-2 relative top-[15%] items-center font-medium text-3xl flex-col ${mainFont.className}`}>
              <h1>Get in touch</h1>
              <p className='text-lg'>Your feedback and questions are our priority.</p>
              <button className='custom-button bg-black rounded-md text-white py-4 px-7 mt-6 relative tracking-widest text-sm'>Send us a message</button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
