import React from 'react'
import Image from 'next/image'


const ImageGrid = () => {
    const images={
        img1:`/assets/gallery/gallery1.avif`,
        img2:`/assets/gallery/gallery2.avif`,
        img3:`/assets/gallery/gallery3.avif`,
        img4:`/assets/gallery/gallery4.avif`,
        img5:`/assets/gallery/gallery5.avif`,
        img6:`/assets/gallery/gallery6.avif`,
        img7:`/assets/gallery/gallery7.webp`,
        img8:`/assets/gallery/gallery8.webp`,
    }
  return (
    <main className='my-8 flex items-center justify-center flex-col'>
        <div className='flex gap-3 flex-[1]'>
            <div className='flex flex-col flex-[.5]'>
                <Image src={images.img1} alt='img1' height={1000} width={1000} className='h-[250px] w-full  object-cover'/>
                <Image src={images.img2} alt='img1' height={1000} width={1000} className='h-[250px] w-full object-cover mt-3'/>
            </div>
            <div className='flex gap-3 flex-[.5]'>
                <Image src={images.img3} alt='img1' height={1000} width={1000} className='h-[512px] w-1/2 object-cover'/>
                <Image src={images.img4} alt='img1' height={1000} width={1000} className='h-[512px] w-1/2 object-cover'/>
            </div>
        </div>
        <div className='flex gap-3 mt-3 flex-[1]'>
            <Image src={images.img5} alt='img1' height={1000} width={1000} className='h-[300px]  flex-[.7] object-cover'/>
            <Image src={images.img6} alt='img1' height={1000} width={1000} className='h-[300px] flex-[.3] object-cover'/>
        </div>
        <div className='flex gap-3 mt-3 flex-[1]'>
            <Image src={images.img7} alt='img1' height={1000} width={1000} className='h-[300px] flex-[.3] object-cover'/>
            <Image src={images.img8} alt='img1' height={1000} width={1000} className='h-[300px]  flex-[.7] object-cover'/>
        </div>
    </main>
  )
}

export default ImageGrid
