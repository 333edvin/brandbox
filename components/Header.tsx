'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the drawer menu
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 z-40">
      <nav className="flex items-center justify-between px-6 md:px-20 py-4 z-40">
        {/* Logo on the left */}
        <div className="flex items-start">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={100} height={100} className="w-16 h-auto md:w-auto md:h-auto"/>
          </Link>
        </div>

        {/* Centered Menu */}
        <ul className="hidden md:flex gap-8 text-white flex-grow justify-center">
          <li>
            <Link href="#" className="hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400">
              Trainers
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-orange-400">
              contact
            </Link>
          </li>
        </ul>

        {/* Right Side Links */}
        <div className="hidden md:flex gap-4 ml-5">
          <Link href="/"><FaInstagram className="text-xl"/></Link>
          <Link href="/"><FaWhatsapp className="text-xl"/></Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={toggleDrawer}
          aria-label="Toggle Menu"
        >
          {isDrawerOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Drawer Menu for Mobile */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleDrawer}
        >
          <div
            className="absolute top-0 left-0 w-3/4 max-w-xs bg-white h-full p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-6">
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 text-lg" onClick={toggleDrawer}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
