import { mainFont } from '@/app/layout'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook, FaTripadvisor } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'

const MainSection = () => {
  return (
    <main className='mt-12 relative flex flex-col items-center justify-center mb-12'>
                        <section className={`absolute top-[-40%]  ${mainFont.className}`}>
            <div className='w-[80vw] bg-[rgba(255,255,255,.9)] rounded-sm px-8 py-6 text-black flex flex-col gap-8'>
                <section className='flex px-16 items-start justify-between'>
                    <div>
                        <div className='mt-5 flex items-center gap-5'>
                            <h1 className='text-2xl'>Address</h1>
                            <div className='w-20 h-[1px] bg-gray-400'></div>
                        </div>
                        <p className='text-lg mt-3'>
                            34 Duporth Avenue,
                            Maroochydore, Queensland
                        </p>
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <article>
                            <div className='mt-5 flex items-center gap-5'>
                                <h1 className='text-2xl'>Telephone</h1>
                                <div className='w-20 h-[1px] bg-gray-400'></div>
                            </div>
                            <div className='flex gap-3 items-center justify-self-start mt-2'>
                                <IoCall size={15}/>
                                <p className='text-sm'>(07) 5326 1022</p>
                            </div>
                        </article>

                        <article>
                            <div className='mt-5 flex items-center gap-5'>
                                <h1 className='text-2xl'>E-mail</h1>
                                <div className='w-20 h-[1px] bg-gray-400'></div>
                            </div>
                            <div className='flex gap-3 items-center justify-self-start mt-2'>
                                <IoMdMail size={15}/>
                                <p className='text-sm'>info@corbins.com.au</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section className='flex px-16 items-start justify-between'>
                    <div>
                        <div className='mt-5 flex items-center gap-5'>
                            <h1 className='text-2xl'>Follow Us</h1>
                            <div className='w-20 h-[1px] bg-gray-400'></div>
                        </div>
                        <div className='flex flex-col gap-5 items-start mt-3'>
                            <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
                                <div className='flex gap-2 items-center relative'>
                                <AiFillInstagram size={25}/>
                                <div className='w-4 h-[1px] bg-gray-400'></div>
                                <h2 className='text-sm font-extralight tracking-widest hover:underline'>instagram.com/corbins_</h2>
                                </div>
                            </Link>
                            <Link href="https://www.facebook.com/corbinskitchenandwinebar/" target='_blank'>
                                <div className='flex gap-2 items-center relative'>
                                <FaFacebook size={25}/>
                                <div className='w-4 h-[1px] bg-gray-400'></div>
                                <h2 className='text-sm font-extralight tracking-widest hover:underline'>facebook.com/corbins_</h2>
                                </div>
                            </Link>
                            <Link href="https://www.tripadvisor.com.au/Restaurant_Review-g499672-d7394406-Reviews-Corbin_s-Maroochydore_Sunshine_Coast_Queensland.html" target='_blank'>
                                <div className='flex gap-2 items-center relative'>
                                <FaTripadvisor size={25}/>
                                <div className='w-4 h-[1px] bg-gray-400'></div>
                                <h2 className='text-sm font-extralight tracking-widest hover:underline'>tripadvisor.com/corbins_</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <article>
                            <div className='mt-5 flex items-center gap-5'>
                                <h1 className='text-2xl'>Open Hours</h1>
                                <div className='w-20 h-[1px] bg-gray-400'></div>
                            </div>
                            <div className='w-full flex flex-col gap-5 mt-3'>
                                <div className='flex gap-3 items-start'>
                                    <p className='text-sm'>Tuesday to Thursday 12PM-Late</p>
                                </div>
                                <div className='flex gap-3 items-start '>
                                    <p className='text-sm'>Friday and Saturday 12PM to LATE</p>
                                </div>
                                <div className='flex gap-3 items-start '>
                                    <p className='text-sm'>Sunday & Monday- Closed</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
            </section> 
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d564.1925391523305!2d153.09267507239238!3d-26.65226108527355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93766272785be7%3A0x66e804ac836faa70!2sCorbin&#39;s%20Kitchen%20%26%20Wine%20Bar!5e0!3m2!1sen!2snp!4v1723307265610!5m2!1sen!2snp" className='w-[100vw] mt-[12rem] h-[90vh] -px-16' style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </main>
  )
}

export default MainSection
