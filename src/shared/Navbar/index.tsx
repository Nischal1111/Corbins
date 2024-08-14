"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { mainFont, subFont } from '@/app/layout';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaTwitter, FaFacebook, FaTripadvisor } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Divider } from '@nextui-org/react';
import { BsDash } from 'react-icons/bs';



const Nav = () => {
    
    const pathname = usePathname();


    const navItems = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contacts" },
        { title: "Gallery", link: "/gallery" },
        { title: "Menus", link: "/menus" }
    ];

    return (
        <>
            <main className=
            {`mt-2 bg-transparent w-full flex items-center z-[100] lg:px-8 lg:py-3 px-4 py-2 justify-between text-white ${subFont.className}
            
            `}>

                <section className='lg:flex lg:flex-col gap-6 hidden'>
                    <div className='flex gap-3 items-center justify-self-start'>
                        <IoCall size={15}/>
                        <p className='text-sm'>(07) 5326 1022</p>
                    </div>
                    <Link href={'mailto:info@corbins.com.au'}>
                        <div className='flex gap-3 items-center justify-self-start'>
                            <IoMdMail size={15}/>
                            <p className='text-sm'>info@corbins.com.au</p>
                        </div>
                    </Link>
                </section>

                <section className='flex flex-col items-center justify-center gap-3'>
                    <section>
                        <Link href="/">
                            <h2 className="lg:text-3xl text-2xl flex items-center font-extrabold">CORB<BsDash/>NS</h2>
                        </Link>
                    </section>

                    <section className="lg:flex hidden gap-5 items-center text-base capitalize relative mt-3">
                        {navItems.map((item) => (
                            <Link href={item.link} key={item.title}>
                                <p className={`${pathname === item.link ? "active" : ""} custom-nav text-base`}>{item.title}</p>
                            </Link>
                        ))}
                    </section>

                </section>

                <section className='flex flex-col items-center justify-center lg:gap-6 gap-0'>
                    <div className='flex gap-3 items-center'>
                        <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
                            <AiFillInstagram className='lg:text-2xl text-[28px]' />
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.facebook.com/corbinskitchenandwinebar/" target='_blank'>
                            <FaFacebook className='lg:text-[20px] text-2xl'/>
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.tripadvisor.com.au/Restaurant_Review-g499672-d7394406-Reviews-Corbin_s-Maroochydore_Sunshine_Coast_Queensland.html" target='_blank'>
                            <FaTripadvisor className='lg:text-[20px] text-2xl'/>
                        </Link>
                    </div>

                    <section>
                        <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                            <button className='hidden lg:flex rounded-sm py-2 px-6 border border-white hover:bg-white hover:text-black transition-all duration-500 custom-button'>
                                Book Now
                            </button>
                        </Link>
                    </section>
                </section>

            </main>
            <Divider className='bg-gray-600 w-full'/>
        </>
    );
};



export default Nav;
