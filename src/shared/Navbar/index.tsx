"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { mainFont, subFont } from '@/app/layout';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Divider } from '@nextui-org/react';



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
            <main className={`mt-2 bg-transparent w-full flex items-center z-[100] px-8 py-3 justify-between text-white ${subFont.className} transition-transform duration-300`}>

                <section className='flex flex-col gap-6'>
                    <div className='flex gap-3 items-center justify-self-start'>
                        <IoCall size={15}/>
                        <p className='text-sm'>(07) 5326 1022</p>
                    </div>
                    <div className='flex gap-3 items-center justify-self-start'>
                        <IoMdMail size={15}/>
                        <p className='text-sm'>info@corbins.com.au</p>
                    </div>
                </section>

                <section className='flex flex-col items-center justify-center gap-3'>
                    <section>
                        <Link href="/">
                            <h2 className="text-3xl font-extrabold">COR-BINS</h2>
                        </Link>
                    </section>

                    <section className="flex gap-5 items-center text-base capitalize relative mt-3">
                        {navItems.map((item) => (
                            <Link href={item.link} key={item.title}>
                                <p className={`${pathname === item.link ? "active" : ""} custom-nav text-base`}>{item.title}</p>
                            </Link>
                        ))}
                    </section>

                </section>

                <section className='flex flex-col items-center justify-center gap-6'>
                    <div className='flex gap-3 items-center'>
                        <AiFillInstagram size={22}/>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <FaFacebook size={20}/>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <IoMdMail size={22}/>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <FaTwitter size={20}/>
                    </div>

                    <section>
                        <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                            <button className='rounded-sm py-2 px-6 border border-white hover:bg-white hover:text-black transition-all duration-500 custom-button'>
                                Book Now
                            </button>
                        </Link>
                    </section>
                </section>

            </main>
            <Divider className='bg-gray-600'/>
        </>
    );
};



export default Nav;
