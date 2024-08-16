"use client";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { mainFont, subFont } from '@/app/layout';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebookF, FaTwitter, FaFacebook, FaTripadvisor } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { Divider } from '@nextui-org/react';
import { BsDash } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';

const Nav = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sideRef = useRef<HTMLDivElement>(null);

    const navItems = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contacts" },
        { title: "Gallery", link: "/gallery" },
        { title: "Menus", link: "/menus" }
    ];

    useEffect(() => {
    const handleOutsideClick = (e: Event) => {
        if (
            sideRef.current &&
            !sideRef.current.contains(e.target as Node)
        ) {
            setIsSidebarOpen(false);
        }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
        document.removeEventListener("touchstart", handleOutsideClick);
    };
}, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (link: string) => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <main className={`lg:mt-2 mt-0 lg:relative lg:border-0 border-b fixed lg:bg-transparent bg-black w-full flex items-center z-[9999999] lg:px-8 lg:py-3 px-4 py-4 justify-between text-white ${subFont.className}`}>
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
                    <Link href="/">
                        <h2 className="lg:text-3xl text-2xl flex items-center font-extrabold">CORB<BsDash/>NS</h2>
                    </Link>

                    <section className="lg:flex hidden gap-5 items-center text-base capitalize relative mt-3">
                        {navItems.map((item) => (
                            <Link href={item.link} key={item.title}>
                                <p className={`${pathname === item.link ? "active" : ""} custom-nav text-base`}>{item.title}</p>
                            </Link>
                        ))}
                    </section>
                </section>

                <section className='lg:flex flex-col items-center justify-center gap-6 hidden'>
                    <div className='flex gap-3 items-center'>
                        <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
                            <AiFillInstagram className='text-2xl' />
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.facebook.com/corbinskitchenandwinebar/" target='_blank'>
                            <FaFacebook className='text-[20px]'/>
                        </Link>
                        <Divider className='h-4 bg-gray-400' orientation='vertical'/>
                        <Link href="https://www.tripadvisor.com.au/Restaurant_Review-g499672-d7394406-Reviews-Corbin_s-Maroochydore_Sunshine_Coast_Queensland.html" target='_blank'>
                            <FaTripadvisor className='text-[20px]'/>
                        </Link>
                    </div>
                    <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                        <button className='rounded-sm py-2 px-6 border border-white hover:bg-white hover:text-black transition-all duration-500 custom-button'>
                            Book Now
                        </button>
                    </Link>
                </section>

                {/* Hamburger menu for mobile */}
                <div className="lg:hidden">
                    <HiMenu size={35} onClick={toggleSidebar} />
                </div>
            </main>
            <Divider className='bg-gray-600 w-full'/>

            {/* Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 " onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* New Sidebar */}
            <div 
                ref={sideRef}
                className={`fixed inset-y-0 h-[80vh] right-0 z-[9999999] flex w-3/5 border-l border-b max-w-xs bg-black transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Sidebar content */}
                <div className={`z-10 flex flex-col flex-1 text-zinc-300 ${subFont.className} p-4 w-full`}>
                    {/* Close button */}
                    <button onClick={toggleSidebar} className="self-end p-2 rounded-lg focus:outline-none focus:ring">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="sr-only">Close sidebar</span>
                    </button>
                    
                    <nav className="flex flex-col flex-1 mt-8">
                        {navItems.map((item) => (
                            <Link href={item.link} key={item.title} onClick={() => handleNavigation(item.link)}>
                                <p className={`py-2 ${pathname === item.link ? "text-white font-bold" : ""}`}>{item.title}</p>
                            </Link>
                        ))}
                    </nav>

                    <section className='flex flex-col gap-6 mb-12'>
                        <div className='flex gap-3 items-center justify-self-start'>
                            <IoCall size={20}/>
                            <p className='text-lg'>(07) 5326 1022</p>
                        </div>
                        <Link href={'mailto:info@corbins.com.au'}>
                            <div className='flex gap-3 items-center justify-self-start'>
                                <IoMdMail size={20}/>
                                <p className='text-xl'>info@corbins.com.au</p>
                            </div>
                        </Link>
                    </section>
                    
                    <div className="mt-auto mb-4">
                        <div className='flex gap-3 items-center mb-4'>
                            <Link href="https://www.instagram.com/corbins_?igsh=YzVpZzBuM2w2a3do" target='_blank'>
                                <AiFillInstagram className='text-3xl' />
                            </Link>
                            <Link href="https://www.facebook.com/corbinskitchenandwinebar/" target='_blank'>
                                <FaFacebook className='text-[30px]'/>
                            </Link>
                            <Link href="https://www.tripadvisor.com.au/Restaurant_Review-g499672-d7394406-Reviews-Corbin_s-Maroochydore_Sunshine_Coast_Queensland.html" target='_blank'>
                                <FaTripadvisor className='text-[30px]'/>
                            </Link>
                        </div>
                        <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                            <button className='w-full rounded-sm py-2 px-6 border border-white hover:bg-white hover:text-black transition-all duration-500'>
                                Book Now
                            </button>
                        </Link>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Nav;