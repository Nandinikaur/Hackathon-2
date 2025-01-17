'use client';
import React from 'react';
import Link from 'next/link'

export default function Footer() {
  return (
<footer className="bg-white text-gray-700 text-sm">
      <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Address Section */}
        <div>
          <p className="text-gray-500">400 University Drive Suite 200 Coral Gables,</p>
          <p className="text-gray-500">FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-400 font-semibold">Links</h3>
            <ul className="mt-4 space-y-4 font-medium">
              <li><Link href="../" className="text-black hover:underline">Home</Link></li>
              <li><Link href="../components/shop" className="text-black hover:underline">Shop</Link></li>
              <li><Link href="../components/blog" className="text-black hover:underline">Blog</Link></li>
              <li><Link href="../components/contact" className="text-black hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold">Help</h3>
            <ul className="mt-4 space-y-4 font-medium">
              <li><a href="#" className="text-black hover:underline">Payment Options</a></li>
              <li><a href="#" className="text-black hover:underline">Returns</a></li>
              <li><a href="#" className="text-black hover:underline">Privacy Policies</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-gray-400 font-semibold">Newsletter</h3>
          <div className="flex flex-col sm:flex sm:flex-row items-center mt-2 pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-auto text-sm bg-transparent border-b-black border-b-2"
            />
            <button className="text-black font-semibold ml-2 border-b-black border-b-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 py-4 pl-4 text-black font-semibold">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </footer>
  );
}
