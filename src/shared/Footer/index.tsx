import React from 'react'
import {Divider} from "@nextui-org/divider";
import { IoCall, IoLocation } from 'react-icons/io5';
import { mainFont, subFont } from '@/app/layout';
import { IoMdMail } from 'react-icons/io';
import {AiFillInstagram} from 'react-icons/ai';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const index = () => {
  return (
    <main className={`relative w-full bottom-0 flex justify-between p-12 text-white bg-black h-auto ${mainFont.className} flex-1 border-t border-gray-800`}>
        <section className="flex-[.3] flex flex-col items-center gap-4">
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

        <section className='flex-[.6] flex flex-col items-center h-auto gap-4'>

          <div className='h-auto flex items-center gap-6'>
            <h2 className={`text-3xl font-extrabold ${subFont.className}`}>COR-BINS</h2>
            <Divider orientation='vertical' className='bg-zinc-300 h-[2.2rem] w-[.5px]'/>
            <div className='flex gap-5 items-center'>
              <AiFillInstagram size={25}/>
              <FaFacebook size={25}/>
              <IoMdMail size={25}/>
              <FaTwitter size={25}/>
            </div>
          </div>

          <p className='text-center text-sm w-3/5'>Sign up to our mailing list to stay in the loop with new releases, events and exclusive offers.</p>

          <div className='w-3/5 flex gap-4 items-center'>
            <input type="text" placeholder='Email Address' className=' h-10 border border-gray-400 rounded-md pl-4 w-4/5 focus:outline-none text-black'/>
            <button className='bg-transparent color-zinc-400 hover:underline'>Sign Up</button>
          </div>

          <div className='flex flex-col gap-4 mt-6 items-center justify-center'>
            <p className='text-sm tracking-wide underline'>Privacy Policy</p>
            <p className='text-sm tracking-wide w-4/5 text-center'>© 2024 Copyright Maya Mexican. Rooftop Bar & Function Venue, 
                Maroochydore, Queensland</p>
          </div>
        </section>

        <section className="flex-[.3] flex flex-col items-center gap-4">
            <h1 className='text-2xl font-medium '>Open Hours</h1>
            <Divider className='bg-gray-500 my-2 w-3/5'/>
            <div className='w-full flex flex-col gap-7'>
              <div className='flex gap-3 items-center justify-center'>
                <p className='text-sm'>Tuesday to Thursday 12PM-Late</p>
              </div>
              <div className='flex gap-3 items-center  justify-center'>
                <p className='text-sm'>Friday and Saturday 12PM to LATE</p>
              </div>
              <div className='flex gap-3 items-center  justify-center'>
                <p className='text-sm'>Sunday & Monday- Closed</p>
              </div>
            </div>
        </section>
    </main>
  )
}

export default index
