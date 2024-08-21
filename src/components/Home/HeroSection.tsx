"use client"
import { mainFont, subFont } from '@/app/layout'
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { BsDash } from 'react-icons/bs'
import { IoCall } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'

const HeroSection = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      onOpen();
      localStorage.setItem('hasSeenModal', 'true');
    }
  }, [onOpen]);

  return (
    <div className={`${subFont.className} w-full flex justify-center flex-col`}>
      <div className='lg:h-[90vh] h-[50vh] w-full rounded-lg mt-8 custom-home-bg relative'>
        <div className={`absolute ${mainFont.className} w-full lg:top-1/3 top-[20%] flex flex-col items-center justify-center`}>
          <div className='flex items-center text-white gap-6'>
            <div className='lg:w-[8rem] w-8 h-[2px] lg:flex hidden bg-gray-300'></div>
            <h1 className='lg:text-5xl text-[1.6rem] font-semibold tracking-widest flex items-center'>Welcome to CORB<BsDash />NS</h1>
            <div className='lg:w-[8rem] w-8 h-[2px] bg-gray-300 lg:flex hidden'></div>
          </div>
          <p className='lg:text-lg text-sm font-normal tracking-wider lg:mt-8 mt-4 leading-6 lg:w-3/5 w-9/10 text-center'>
            Corbin&apos;s: Where flavor meets unique culinary adventure. Indulge in expertly crafted dishes that blend tradition.
          </p>
          <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
            <button className='custom-button bg-transparent border border-white text-white rounded-sm py-4 px-6 mt-8 relative tracking-widest text-base hover:bg-white hover:text-black duration-500'>Make a reservation</button>
          </Link>
        </div>
      </div>

      {/* Modal visible on all screens */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        className={`${mainFont.className} p-0 fixed`}
        size={"2xl"}
        backdrop='opaque'
      >
        <ModalContent className='p-0'>
          {(onClose) => (
            <div className='flex p-0 text-black'>
              {/* Conditionally render image based on screen size */}
              <section className='lg:w-1/2 w-full lg:flex hidden'>
                <Image src="/assets/modal.avif" alt="ModalImage" height={1000} width={1000} className='w-full h-full object-cover' />
              </section>
              <section className='lg:w-1/2 w-full p-10 flex flex-col items-center justify-center gap-2 bg-slate-50'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl tracking-wider font-medium'>Book at CORBINS</h1>
                  <p className='text-sm font-extralight tracking-wide text-justify'>
                    Booking a table at Corbin&apos;s is your gateway to an exceptional dining experience. Known for its warm ambiance and delectable cuisine, Corbin&apos;s offers a perfect setting for any occasion. With attentive service and a menu that caters to diverse tastes, dining at Corbin&apos;s is always a delightful affair.
                  </p>
                  <section className='flex flex-col items-start justify-between text-xs'>
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
                  <Link href="https://www.opentable.com.au/restref/client/?lang=en-AU&ot_source=Restaurant%20website&restref=162221&corrid=4f9ca6c2-719c-46cb-a632-f752d93d8795" target='_blank'>
                    <button className='bg-transparent border border-black text-black rounded-sm w-full py-2 px-4 mt-8 relative tracking-widest text-base hover:bg-black hover:text-white duration-500'>
                      Book a table
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default HeroSection
