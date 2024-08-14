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
    <main className={`w-full mt-20 mb-8 flex gap-4 items-center justify-between  ${mainFont.className}`}>
      <div className='w-1/2'>
                <div className='custom-contacts h-screen w-[45vw]'>
                    {/* <Image src={"/assets/home/findus.jpg"} alt='findUS' height={1000} width={1000} className='h-full w-full object-cover'/> */}
                </div>
            </div>
      <section className='flex flex-col items-center gap-12 w-1/2'>
        <div className='text-center '>
          <h1 className='text-gray-400 text-2xl '>Get in touch</h1>
          <h1 className='text-5xl font-medium mt-3'>Contact Us</h1>
        </div>
        <form className='flex flex-col gap-16 w-full px-16'>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Your name</span>
                  <input type="text" className='w-full focus:outline-none bg-transparent pb-2 border-b border-b-zinc-200 text-base px-4' required value={form.name} onChange={handleChange} placeholder='Whats Your Name ?' name='name' autoComplete='off'/>
                  </label>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Your Email</span>
                  <input type="email" className='w-full focus:outline-none bg-transparent pb-2 border-b border-b-zinc-200 text-base px-4' required value={form.email} onChange={handleChange} placeholder='Whats Your Email ?' name='email'autoComplete='off' />
                  </label>
                  <label htmlFor="" className='flex flex-col gap-6'>
                  <span className='text-xl tracking-wider'>Leave a message</span>
                  <textarea type="text" className='w-full focus:outline-none bg-transparent border-b border-b-zinc-200 text-base px-4'  required value={form.message} onChange={handleChange} placeholder='Send me a message .' name='message' autoComplete='off'style={{minHeight:"20vh"}}/>
                  </label>
                  <button className='w-fit custom-button bg-transparent border border-white text-white rounded-sm py-2 px-6 -mt-4 relative tracking-widest text-base hover:bg-white hover:text-black duration-500' type='submit'>{loading ? "Sending..." :"Send"} </button>
              </form>

      </section>
    </main>
  )
}

export default ContactForm
