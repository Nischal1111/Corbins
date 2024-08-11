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
            <h1 className='text-2xl'>Contacts</h1>
            <div className='w-20 h-[1px] bg-gray-400'></div>
        </div>
        {/* <Image src="/assets/aboutcorbins.webp" alt='about-main' height={2000} width={2000} className='h-[70vh] w-[95vw] rounded-lg mt-8 object-cover'/> */}
        <div className='custom-contact-bg h-[90vh] w-full rounded-lg mt-8 relative flex items-center justify-center'>
           
        </div>
    </div>
  )
}

export default HeroSection
