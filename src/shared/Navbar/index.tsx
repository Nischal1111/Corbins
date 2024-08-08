"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { mainFont, subFont } from '@/app/layout';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Nav = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle transparency based on scroll position
    const handleTransparency = (scrollY:number) => {
        const scrollThreshold = window.innerHeight ;
        if (scrollY > scrollThreshold) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Handle visibility based on scroll direction
    const handleVisibility = (scrollY:number) => {
        if (scrollY > lastScrollY && scrollY > window.innerHeight / 3) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setLastScrollY(scrollY);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        handleTransparency(scrollY);
        handleVisibility(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const navItems = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact" },
        { title: "Gallery", link: "/gallery" },
        { title: "Menus", link: "/menus" }
    ];

    return (
        <>
            {/* Small Header */}
            <header className={`h-10 ${scrolled ? 'bg-black' : 'bg-transparent'} text-white text-sm px-8 flex justify-between items-center py-3 fixed top-0 left-0 w-full z-[100] border-b-[0.1px] border-gray-800 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex items-center">
                    <span className="mr-4">info@corbins.com</span>
                    <span>+123 456 7890</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="https://www.instagram.com" target="_blank">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.facebook.com" target="_blank">
                        <FaFacebookF />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank">
                        <FaTwitter />
                    </Link>
                </div>
            </header>

            {/* Navbar */}
            <main className={`h-16 ${scrolled ? 'bg-black' : 'bg-transparent'} w-full flex items-center z-[100] px-8 py-3 justify-between text-white ${subFont.className} fixed top-10 left-0 border-b-[0.1px] border-gray-400 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-[2.5rem]'}`}>
                <section className="flex gap-5 items-center text-base capitalize relative">
                    {navItems.map((item) => (
                        <Link href={item.link} key={item.title}>
                            <p className={`${pathname === item.link ? "active" : ""} custom-nav text-base`}>{item.title}</p>
                        </Link>
                    ))}
                </section>

                <section className='ml-[-12rem]'>
                    <Link href="/">
                        <h2 className="text-3xl font-extrabold">COR-BINS</h2>
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
        </>
    );
};

export default Nav;
