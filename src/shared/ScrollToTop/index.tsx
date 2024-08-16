"use client";
import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className="shadow-2xl size-[3.5rem] flex items-center p-1 border border-white justify-center rounded-full fixed lg:bottom-12 bottom-16 lg:right-12 right-8 bg-gray-800 z-[999] cursor-pointer"
            onClick={handleTop}
        >
            <AiOutlineArrowUp size={25} className="text-white"/>
        </button>
    );
};

export default ScrollToTop;
