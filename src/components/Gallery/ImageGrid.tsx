"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.4
        }
    }
};

const SkeletonLoader = () => (
    <div className="flex flex-col space-y-6 w-full mt-4">
        <div className="h-[300px] bg-gradient-to-r from-zinc-200 via-gray-400 to-gray-100 rounded-xl w-full skeleton-animation"></div>
        <div className="flex space-x-4">
            <div className="h-[300px] bg-gradient-to-r from-zinc-200 via-gray-400 to-gray-100 rounded-xl w-1/2 skeleton-animation"></div>
            <div className="h-[300px] bg-gradient-to-r from-zinc-200 via-gray-400 to-gray-100 rounded-xl w-1/2 skeleton-animation"></div>
        </div>
        <div className="h-[300px] bg-gradient-to-r from-zinc-200 via-gray-400 to-gray-100 rounded-xl w-full skeleton-animation"></div>
    </div>
);

const ImageGrid = () => {
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulate a 1-second render time

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <motion.main 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: .25 }}
            className='my-8 flex flex-wrap gap-6 w-full flex-1 px-12'>
            
            {/* First row of images */}
            <motion.div className='flex lg:flex-row flex-col gap-6 w-full lg:h-[300px] sm:h-auto'>
                <motion.div variants={fadeIn} className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img1} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </motion.div>
                <motion.div variants={fadeIn} className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
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
                </motion.div>
            </motion.div>

            {/* Second row of images */}
            <motion.div variants={fadeIn} className='flex lg:flex-row-reverse flex-col-reverse gap-8 w-full lg:h-[300px] sm:h-auto'>
                <motion.div variants={fadeIn} className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img4} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </motion.div>
                <motion.div variants={fadeIn} className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
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
                </motion.div>
            </motion.div>

            {/* Third row of images */}
            <motion.div variants={fadeIn} className='flex lg:flex-row flex-col gap-6 w-full h-[300px]'>
                <motion.div variants={fadeIn} className='lg:w-1/2 w-full h-[300px]'>
                    <Image  
                        src={images.img7} 
                        alt='img' 
                        height={1000} 
                        width={1000} 
                        className='h-[300px] w-full object-cover rounded-sm transform transition duration-300 ease-in-out hover:scale-[1.03]'
                    />
                </motion.div>
                <motion.div variants={fadeIn} className='flex lg:flex-row flex-col gap-4 lg:w-1/2 w-full'>
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
                </motion.div>
            </motion.div>
        </motion.main>
    );
};

export default ImageGrid;