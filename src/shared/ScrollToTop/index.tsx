"use client";
import React, { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className="shadow-2xl h-10 w-10 flex items-center p-1 border border-white justify-center rounded-full fixed bottom-12 right-12 bg-gray-800 z-[999] cursor-pointer"
            onClick={handleTop}
        >
            <AiOutlineArrowUp size={20} className="text-white"/>
        </button>
    );
};

export default ScrollToTop;
