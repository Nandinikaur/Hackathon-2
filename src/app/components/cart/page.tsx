'use client'
import React from 'react'
import Footer from '../footer/page'
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"
import Link from "next/link"
import SofaImg from "../assets/Asgaard_sofa_1.png"


 const Cart = () => {
  return (
    <div className='bg-[#ffffff]'>
      {/*sec-1 start*/}
                     {/* Hero Section */}
   <section className="w-auto relative md:w-full lg:w-[1440px] h-[300px] md:h-[500px] bg-cover bg-center">
     <div  className="flex flex-col items-center justify-center h-full">
     <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover absolute" />
     <div className="text-center text-black text-3xl md:text-5xl mb-4">
       <div><Image src={Hero1} alt="hero image" className="inline-block" /> </div>
       <h1 className="text-4xl font-bold mb-2">Cart</h1>
       <nav className="flex justify-between items-center text-sm md:text-base">
         <span className="text-[#090808]">Home</span>
         <span className="mx-2 text-2xl">&#8250;</span>
         <span className="text-black">Cart</span>
       </nav>
     </div>
     </div>
 </section>
  {/*sec-1 end*/}  
      
{/*sec-2 start*/}
        <div className="max-auto p-0 flex flex-col justify-center items-center h-[525px] max-w-full border-[2px] border-pink-600">
          <div className='flex justify-between w-[1240px] h-[390px] max-w-full border-[2px] border-pink-300'>
          <div className="bg-white  border-[2px] border-pink-900">
            <table className="text-left border-collapse  border-[2px] border-orange-400">
              <thead>
                <tr className="md:w-[817px] h-[55px] bg-yellow-100 text-gray-600  border-[2px] border-orange-600">
                  <th className="py-2 px-4  border-[2px] border-purple-400">Product</th>
                  <th className="py-2 px-4  border-[2px] border-purple-600">Price</th>
                  <th className="py-2 px-4  border-[2px] border-purple-900">Quantity</th>
                  <th className="py-2 px-4  border-[2px] border-purple-950">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[2px] border-green-950">
                  <td className="py-4 px-4 flex flex-col items-center gap-4  border-[2px] border-green-500">
                    <Image src={SofaImg} alt="Product Image" className="w-[106px] h-[106px] rounded-lg  border-[2px] border-green-800"/>
                    <span className="w-[100px] text-gray-700 border-[2px] border-black">Asgaard Sofa</span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">Rs. 250,000.00</td>
                  <td className="py-4 px-4">
                    <input
                      type="number" placeholder='1' className="flex justify-center items-center w-[30px] border border-gray-300 rounded-md text-center text-black"/>
                  </td>
                  <td className="py-4 px-4 text-gray-700 font-semibold">
                    Rs. 250,000.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Section (Cart Totals) */}
          <div className="flex flex-col items-center text-center w-[393px] h-[390px] bg-[#fff9e5] gap-[40px] py-[20px]  border-[2px] border-black">
            <h2 className="text-lg font-semibold text-[#000000]">Cart Totals</h2>
            <div className="flex flex-col mt-4 text-[#000000] gap-[30px]">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className='text-[#9f9f9f]'>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="text-[#B88E2F] font-semibold">
                  Rs. 250,000.00
                </span>
              </div>
              <Link href='../components/checkout'>
              <button className="w-[222px] h-[59px] py-2 px-4 bg-white border border-[#000000] rounded-[15px] text-[#000000] hover:bg-gray-100">
                Check Out
              </button>
              </Link>
            </div>
          </div>
        </div>
     </div>

{/*sec-2 end*/}


{/*sec-3 start*/}
<section className="bg-[#f7e7e7] py-12">
       <div className="container mx-auto px-6 md:px-12">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div>
             <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
             <p className="text-gray-500">For all orders over $50, consectetur adipim scing elit.</p>
           </div>
           <div>
             <h3 className="text-lg font-semibold mb-2">90 Days Return</h3>
             <p className="text-gray-500">If goods have problems, consectetur adipim scing elit.</p>
           </div>
           <div>
             <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
             <p className="text-gray-500">100% secure payment, consectetur adipim scing elit.</p>
           </div>
         </div>
       </div>
     </section>
 {/*sec-3 end*/}

      <div className='absolute'>
  <Footer />
</div>
      
      </div>
  )
}

export default Cart