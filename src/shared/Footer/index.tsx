"use client"
import React from 'react'
import {Divider} from "@nextui-org/divider";
import { IoCall, IoLocation } from 'react-icons/io5';
import { mainFont, subFont } from '@/app/layout';
import { IoMdMail } from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import { FaFacebook, FaTripadvisor, FaTwitter } from 'react-icons/fa';
import { BsDash } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '@/motion/motion';

const index = () => {
  return (
    <motion.main initial="hidden"
                        whileInView="show"
                        viewport={{ once: true,amount:.5}}
                        variants={fadeIn("down", "tween", 0.3, .8)} className={`relative w-full bottom-0 lg:flex lg:flex-row flex-col justify-between lg:p-12 p-8 text-white bg-black h-auto ${mainFont.className} flex-1 border-t border-gray-800`}>
        <section className="flex-[.3] flex flex-col lg:items-center items-start gap-4">
            <h1 className='text-2xl font-medium '>Contact</h1>
            <Divider className='bg-gray-500 my-2 w-3/5'/>
            <div className='w-3/5 flex flex-col gap-4'>
              <div className='flex gap-3 items-center justify-self-start'>
                <IoCall size={15}/>
                <p className='text-sm'>(07) 5326 1022</p>
              </div>
              <div className='flex gap-3 items-center justify-self-start'>
                <IoMdMail size={15}/>
                <p className='text-sm'>info@corbins.com.au</p>
              </div>
              <div className='flex gap-3 items-center justify-self-start'>
                <IoLocation size={25}/>
                <p className='text-sm'>34 Duporth Avenue,
                    Maroochydore, Queensland</p>
              </div>
            </div>
        </section>

        <section className='mt-16 lg:mt-0 lg:flex-[.6] flex-1 flex flex-col lg:items-center items-start h-auto gap-4'>

          <div className='h-auto lg:flex lg:flex-row flex-col items-center gap-6 justify-center'>
            <h2 className={`text-3xl flex items-center font-extrabold ${subFont.className}`}>CORB<BsDash/>NS</h2>
            <Divider orientation='vertical' className='bg-zinc-300 h-[2.2rem] w-[.5px] lg:flex hidden'/>
            <div className='flex lg:mt-0 mt-3 gap-5 items-center'>
              <AiFillInstagram size={25}/>
              <FaFacebook size={25}/>
              <FaTripadvisor size={25}/>
            </div>
          </div>

          <p className='lg:text-center text-justify text-sm lg:w-3/5 w-full'>Sign up to our mailing list to stay in the loop with new releases, events and exclusive offers.</p>

          <div className='lg:w-3/5 w-full flex gap-4 items-center'>
            <input type="text" placeholder='Email Address' className=' h-10 border border-gray-400 rounded-md pl-4 w-4/5 focus:outline-none text-black'/>
            <button className='bg-transparent color-zinc-400 hover:underline lg-text-base text-sm'>Sign Up</button>
          </div>

          <div className='lg:flex lg:flex-col hidden gap-4 mt-6 lg:items-center items-start justify-center  '>
            <p className='text-sm tracking-wide underline'>Privacy Policy</p>
            <p className='text-sm tracking-wide w-4/5 text-center'>© 2024 Copyright Corbins Restaurant, 
                34 Duporth Avenue,
                    Maroochydore, Queensland</p>
          </div>
        </section>

        <section className="mt-16 mb-4  lg:mb-0 lg:mt-0 flex-[.3] flex flex-col lg:items-center items-start gap-4">
            <h1 className='text-2xl font-medium '>Open Hours</h1>
            <Divider className='bg-gray-500 my-2 w-3/5'/>
            <div className='w-full flex flex-col lg:items-center items-start gap-7'>
              <div className='flex gap-3 lg:items-center items-start'>
                <p className='text-sm'>Tuesday to Thursday 12PM-Late</p>
              </div>
              <div className='flex gap-3 lg:items-center items-start '>
                <p className='text-sm'>Friday and Saturday 12PM to LATE</p>
              </div>
              <div className='flex gap-3 lg:items-center items-start '>
                <p className='text-sm'>Sunday & Monday- Closed</p>
              </div>
            </div>
        </section>
    </motion.main>
  )
}

export default index
