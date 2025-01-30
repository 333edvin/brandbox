'use client';

import { Phone, MapPin, Mail } from 'lucide-react';

export const TopNav = () => {
  return (
    <div className="bg-gray-900 text-white text-xs md:text-sm py-2 px-4 md:px-12 lg:px-20 flex justify-between items-center">
      {/* Left Section: Location */}
      <div className="flex items-center space-x-2">
        <MapPin size={16} className="text-yellow-400" />
        <p>Pangarappilli, Chelakkara</p>
      </div>
      
      {/* Right Section: Contact Info */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Phone size={16} className="text-yellow-400" />
          <p>+1 234 567 890</p>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Mail size={16} className="text-yellow-400" />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};
