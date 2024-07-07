import React, { useState } from 'react';
import DarkMode from './DarkMode/DarkMode/DarkMode';


const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* logo */}
            <a href="/" className="mt-5 text-xl font-bold text-gray-900 dark:text-white">Nextan</a>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" className="text-gray-900 mt-5 ml-5  dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/about" className="text-gray-900 ml-5 mt-5 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Service</a>
              <a href="/about" className="text-gray-900 ml-5 mt-5 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Feature</a>
              <a href="/contact" className="text-gray-900 ml-5  mt-5 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Porduct</a>
              <a href="/about" className="text-gray-900 ml-5 mt-5 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              <a href="#login" class="text-[#C80036] mt-4 px-4 py-3  group-hover:opacity-80 transition-opacity duration-300 ease-in-out lg:px-2.5 lg:py1.5 lg:text-sm inline-block rounded-md text-center text-base font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80">Login</a>
              <a href="#register" class="bg-[#C80036] text-[20px] text-white px-2 mt-5 py-0 inline-block rounded-md h-8 text-justify  font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80">Sign Up</a>
            </div>
          </div>
          <div className="flex items-center">
            {/* toggle */}
            <div className="md:ml-[-10%] sm:ml-[-10%]">
              <DarkMode />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* toggle */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/contact" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#login" class="text-green-600 px-5 py-3  group-hover:opacity-80 transition-opacity duration-300 ease-in-out lg:px-2.5 lg:py1.5 lg:text-sm inline-block rounded-md text-center text-base font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80">Login</a>
            <a href="#register" class="bg-green-500 text-white px-5 py-3 inline-block rounded-md text-center text-base font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbars;
