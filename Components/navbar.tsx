"use client"
import React, { useState } from 'react';
import { Menu, X, FileText, Upload, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
         <Link href="/">
          <div className="flex items-center space-x-2">
           
            
                   <Image src="/favicon.png" alt="Logo" width={40} height={40} >
                   </Image>

          
            <span className="text-xl font-bold text-gray-900">Doculyz</span>
          </div>
         </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <Upload className="h-4 w-4" />
                <span>Scan Documents</span>
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <FileText className="h-4 w-4" />
                <span>My Documents</span>
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200">
              <Settings className="h-5 w-5" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Start Scanning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link 
                href="/" 
                className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <Upload className="h-4 w-4" />
                <span>Scan Documents</span>
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
              >
                <FileText className="h-4 w-4" />
                <span>My Documents</span>
              </Link>
              <Link 
                href="#" 
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                About
              </Link>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full text-left text-gray-700 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200">
                  Sign In
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200">
                  Start Scanning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;