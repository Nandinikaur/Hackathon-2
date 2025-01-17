'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaSearch, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto  sm:px-6 lg:px-8 bg-white shadow-md top-0 z-50 border-[2px] ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 lg:justify-end lg:gap-[380px] ">
         
          {/* Menu Items */}
          <div className="hidden md:flex lg:flex lg:gap-[40px] items-center gap-[100px]">
            <Link href="../" className="text-[#7d7b7b] hover:text-[#000000]">Home</Link>
            <Link href="../components/shop" className="text-[#7d7b7b] hover:text-[#000000]">Shop</Link>
            <Link href="../components/blog" className="text-[#7d7b7b] hover:text-[#000000]">Blog</Link>
            <Link href="../components/contact" className="text-[#7d7b7b] hover:text-[#000000]">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex justify-start gap-[20px] md:flex items-center lg:gap-[40px]">
            <Link href='../components/my-account'>
            <FaUser className="text-[#5bc232] hover:text-[#ffffff] hover:bg-[#e73a3a] hover:rounded-[50px] cursor-pointer" />
            </Link>
            <Link href='#'>
            <FaSearch className="text-[#7d7b7b] hover:text-[#000000] cursor-pointer" />
            </Link>

            <Link href='#'>
            <FaRegHeart className="text-[#fb3535] hover:text-[#000000] cursor-pointer" />
            </Link>

            <Link href='../components/cart'>
            <FaShoppingCart className="text-[#4685d2] hover:text-[#000000] cursor-pointer" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md text-gray-600 -ml-5 hover:text-gray-900">
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="text-center px-2 pt-2 pb-4 space-y-2 sm:px-3">
            <Link href="../" className="block text-gray-600 border-b-[2px] hover:text-gray-900">Home</Link>
            <Link href="../components/shop" className="block text-gray-600 border-b-[2px] hover:text-gray-900">Shop</Link>
            <Link href="../components/blog" className="block text-gray-600 border-b-[2px] hover:text-gray-900">Blog</Link>
            <Link href="../components/contact" className="block text-gray-600 border-b-[2px] hover:text-gray-900">Contact</Link>
          </div>
          </div>
      )}
    </nav>
  );
}
