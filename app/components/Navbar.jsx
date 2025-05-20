"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-6 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/"><Image src="/bglogo.png" className='animate-spin duration-[10s]' width={50} height={50}/></Link>
        </div>
        <ul className="hidden md:flex space-x-6 text-[#434343] font-semibold text-md">
          {["Home", "About Us", "Services", "Pages", "Blog", "Contact"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase()}`} className="hover:text-[#2e2e2e]">{item}</Link>
            </li>
          ))}
        </ul>
        <Link href="/get-started">
          <button className="bg-[#2e2e2e] text-white px-4 py-2 rounded hover:bg-[#434343]">Get Started</button>
        </Link>
        {/* Hamburger Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-purple-600 text-white">
          <ul className="flex flex-col items-center space-y-4 p-6">
            {["Home", "About Us", "Services", "Pages", "Blog", "Contact"].map((item, index) => (
              <li key={index}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-gray-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/get-started">
            <button className="bg-white text-purple-600 px-4 py-2 rounded w-full mt-4">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
