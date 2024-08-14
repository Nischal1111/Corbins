import React from 'react';
import Image from 'next/image';

const ImageGrid = () => {
    const images = {
        img1: `/assets/gallery/gallery1.avif`,
        img2: `/assets/about-food.avif`,
        img3: `/assets/home/coffee.jpg`,
        img4: `/assets/gallery/gallery4.avif`,
        img5: `/assets/gallery/gallery5.avif`,
        img6: `/assets/home/wine-scroll.avif`,
        img7: `/assets/home/scroll2.avif`,
        img8: `/assets/gallery/gallery8.avif`,
        img9: `/assets/gallery/gallery9.avif`,
    };

    return (
        <main className='my-8 flex flex-wrap gap-6 w-full flex-1 px-12'>
            {/* First row of images */}
            <div className='flex lg:flex-row flex-col gap-6 w-full lg:h-[300px] sm:h-auto'>
                <div className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img1} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </div>
                <div className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
                    <Image  
                        src={images.img2} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                    <Image  
                        src={images.img3} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                </div>
            </div>

            {/* Second row of images */}
            <div className='flex lg:flex-row-reverse flex-col-reverse gap-8 w-full lg:h-[300px] sm:h-auto'>
                <div className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img4} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </div>
                <div className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
                    <Image  
                        src={images.img5} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                    <Image  
                        src={images.img6} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                </div>
            </div>

            {/* Third row of images */}
            <div className='flex lg:flex-row flex-col gap-6 w-full h-[300px]'>
                <div className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img7} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </div>
                <div className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
                    <Image  
                        src={images.img8} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                    <Image  
                        src={images.img9} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='lg:w-1/2 w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.05]'
                    />
                </div>
            </div>
        </main>
    );
};

export default ImageGrid;
