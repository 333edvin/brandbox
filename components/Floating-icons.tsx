'use client';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const FloatingIcons = () => {
    return (
        <div className="fixed bottom-10 right-5 flex flex-col space-y-3 md:hidden z-30">
            <a href="https://wa.me/1XXXXXXXXXX?" target="_blank" rel="noopener noreferrer" className="bg-[#FFEA00] p-3 rounded-full shadow-lg">
                <FaWhatsapp className="text-black text-2xl" />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="bg-[#FFEA00] p-3 rounded-full shadow-lg">
                <FaInstagram className="text-black text-2xl" />
            </a>
        </div>
    );
};


