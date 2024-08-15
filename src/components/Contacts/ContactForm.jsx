"use client"
import { mainFont } from '@/app/layout'
import React, { useState } from 'react'
import Image from 'next/image'
const ContactForm = () => {
  const [loading,setLoading]=useState(false)
    const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};
  return (
    <main className={`relative w-full lg:mt-20 mt-8 pb-8 flex lg:flex-row flex-col gap-4 items-center justify-between  ${mainFont.className}`}>
      <div className='lg:w-1/2 w-full relative lg:flex hidden'>
                <div className='custom-contacts lg:h-screen h-[50vh] lg:w-[45vw] w-full'>
                </div>
      </div>
      <section id='contact-form' className='relative flex flex-col items-center gap-12 lg:w-1/2 w-full'>
        <h1 className='text-2xl lg:hidden flex  font-medium mt-3'>Contact Us</h1>
        <div className='text-center lg:flex lg:flex-col hidden '>
          <h1 className='text-gray-400 text-2xl '>Get in touch</h1>
          <h1 className='text-5xl font-medium mt-3'>Contact Us</h1>
        </div>
        <form  className='flex flex-col gap-16 w-full lg:px-16 px-10 lg:p-0 p-4'>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Your name</span>
                  <input type="text" className='w-full focus:outline-none bg-transparent pb-2 border-b border-b-zinc-200 text-base px-4 rounded-none' required value={form.name} onChange={handleChange} placeholder='Enter Your Name...' name='name' autoComplete='off'/>
                  </label>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Your Email</span>
                  <input type="email" className='w-full focus:outline-none bg-transparent pb-2 border-b border-b-zinc-200 text-base px-4 rounded-none' required value={form.email} onChange={handleChange} placeholder='Enter Your Email...' name='email'autoComplete='off' />
                  </label>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Leave a message</span>
                  <textarea type="text" className='w-full focus:outline-none bg-transparent border-b border-b-zinc-200 text-base px-4 rounded-none'  required value={form.message} onChange={handleChange} placeholder='Send us a message...' name='message' autoComplete='off'style={{minHeight:"20vh"}}/>
                  </label>
                  <button className='w-fit custom-button bg-transparent border border-white text-white rounded-sm py-2 px-6 -mt-4 relative tracking-widest text-base hover:bg-white hover:text-black duration-500' type='submit'>{loading ? "Sending..." :"Send"} </button>
              </form>

      </section>
    </main>
  )
}

export default ContactForm
