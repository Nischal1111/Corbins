"use client";
import Link from 'next/link';
import React from 'react';
import { mainFont, subFont } from '@/app/layout';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathname = usePathname();

    const navItems = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Contact",
            link: "/contact"
        },
        {
            title: "Gallery",
            link: "/gallery"
        },
        {
            title: "Menus",
            link: "/menus"
        }
    ];

    return (
        <main className={`h-20 bg-black w-full flex items-center z-[100] px-8 justify-between text-white ${subFont.className} fixed border-b-[0.1px] border-white`}>
            <section className="flex gap-5 items-center text-base capitalize relative">
                {navItems.map((item) => (
                    <Link href={item.link} key={item.title}>
                        <p className={`${pathname === item.link ? "active" : ""} custom-nav text-base`}>{item.title}</p>
                    </Link>
                ))}
            </section>

            <section className='ml-[-11rem]'>
                <Link href="/">
                    <h2 className="text-4xl font-extrabold">COR-BINS</h2>
                </Link>
            </section>

            <section>
                <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                    <button className='rounded-sm py-2 px-8 border border-white hover:bg-white hover:text-black transition-all duration-500'>
                        Book Now
                    </button>
                </Link>
            </section>
        </main>
    );
};

export default Nav;
