import React from 'react'
// import Image from 'next/image'
import { Image } from '@nextui-org/react'


const ImageGrid = () => {
    const images={
        img1:`/assets/gallery/gallery1.avif`,
        img2:`/assets/gallery/gallery2.avif`,
        img3:`/assets/gallery/gallery3.avif`,
        img4:`/assets/gallery/gallery4.avif`,
        img5:`/assets/gallery/gallery5.avif`,
        img6:`/assets/gallery/gallery6.avif`,
        img7:`/assets/gallery/gallery7.webp`,
        img8:`/assets/gallery/gallery8.avif`,
    }
  return (
    <main className='my-8 flex items-center justify-center flex-col w-full'>
        <div className='flex gap-3 w-full'>
            <div className='flex flex-col w-[45%]'>
                <Image isZoomed src={images.img1} alt='img1' width='100%' className='h-[250px] flex-1 object-cover'/>
                <Image isZoomed src={images.img2} alt='img1' width='100%' className='h-[250px] flex-1  object-cover mt-3'/>
            </div>
            <div className='flex gap-3 w-[55%]'>
                <Image isZoomed src={images.img3} alt='img1' className='h-[512px] object-cover'/>
                <Image isZoomed src={images.img4} alt='img1' className='h-[512px] object-cover'/>
            </div>
        </div>
        <div className='flex gap-3 mt-3 w-full'>
            <div className='w-[70%]'>
                <Image isZoomed src={images.img5} alt='img1' width='100%' className='h-[300px]   object-cover'/>
            </div>
            <div className='w-[30%]'>
                <Image isZoomed src={images.img6} alt='img1' width='100%' className='h-[300px]  object-cover'/>
            </div>
        </div>
        <div className='flex gap-3 mt-3  w-full'>
            <div className='w-[30%]'>
                <Image isZoomed src={images.img7} alt='img1' width='100%' className='h-[300px]   object-cover'/>
            </div>
            <div className='w-[70%]'>
                <Image isZoomed src={images.img8} alt='img1' width='100%' className='h-[300px]  object-cover'/>
            </div>
        </div>
    </main>
  )
}

export default ImageGrid
