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
                <h2 className="text-4xl font-extrabold">COR-BINS</h2>
            </section>

            <section>
                <button className='rounded-sm py-2 px-8 border border-white hover:bg-white hover:text-black transition-all duration-500'>
                    Book Now
                </button>
            </section>
        </main>
    );
};

export default Nav;
