'use client'
import {FaWhatsapp, FaFacebook,FaInstagram} from 'react-icons/fa'

export const Footer = () =>{
    return(
        <footer className="relative">

       
        <div className=" bg-gray-800 text-gray-500 text-sm p-5">

            <div className="flex flex-col md:flex-row justify-between ">
                <div>
                    <p className="font-semibold text-white">
                    BRANDBOX
                    </p>
                    <p>Lorem Ipsum is simply dummy text <br/> of the printing and typesetting
                    industry.</p>
                </div>
                <div className="flex flex-col items-end  gap-2 my-5">
                    <p>Stay Connected with us.</p>
                    <div className="space-x-2 flex text-2xl">
                    <FaWhatsapp/>
                    <FaFacebook/>
                    <FaInstagram/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-around items-center my-5">
                <p>+91 1234 5678 90</p>
                <p>example@gmail.com</p>
                <p>Chelakkara</p>
            </div>

        </div>
        <p className=" w-full bg-gray-900 text-center text-xs py-2">Copyright @ 2024 conveb</p>
        </footer>
    )
}