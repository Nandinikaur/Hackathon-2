'use client'
import React from 'react'
import Footer from "../footer/page"
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"

const Checkout = () => {
  return (
    <div className='bg-[#ffffff]'>
              {/*sec-1 start*/}
   <section className="w-auto relative md:w-full lg:w-full h-[300px] md:h-[500px] bg-cover bg-center">
     <div  className="flex flex-col items-center justify-center h-full">
     <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover absolute" />
     <div className="text-center text-black text-3xl md:text-5xl mb-4">
       <div><Image src={Hero1} alt="hero image" className="inline-block" /> </div>
       <h1 className="text-4xl font-bold mb-2">Checkout</h1>
       <nav className="flex justify-between items-center text-sm md:text-base">
         <span className="text-[#090808]">Home</span>
         <span className="mx-2 text-2xl">&#8250;</span>
         <span className="text-black">Checkout</span>
       </nav>
     </div>
     </div>
 </section>
  {/*sec-1 end*/}  
{/*sec-2 start*/}
<div className='flex justify-center items-center md:flex flex-col lg:w-full lg:h-[1629px] lg:my-[80px]'>
  <div className='lg:flex justify-between'>

    <div className='flex flex-col justify-between items-center md:w-[608px] h-[1714px] py-[40px] shadow-lg rounded-md text-gray-800'>
      <div className='w-[245px] h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000]'>
        <h1>Billing details</h1>
      </div>

      <div className='flex justify-center items-center w-[454px] h-[121px] gap-[20px]'>
      <div className='flex flex-col w-[212px] h-[121px] gap-[10px]'>
    <label className='w-[100px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>First Name</label>
    <input type='text' className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
    </div>

    <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
    <label className='w-[100px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Last Name</label>
    <input type='text' className='w-[211px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
    </div>

      </div>

      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
        <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Company Name (Optional)</label>
        <input type='text' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>
      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Country / Region</label>
        <select className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'>
          <option value='india'>India</option>
          <option value='usa'>USA</option>
          <option value='canada'>Canada</option>
          <option value='uk'>UK</option>
        </select>
        </div>
      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Street address</label>
        <input type='text' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>
      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Town / City</label>
        <input type='text' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>
      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Province</label>
        <select className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'>
          <option value='india'>Western Province</option>
          <option value='usa'>USA</option>
          <option value='canada'>Canada</option>
          <option value='uk'>UK</option>
        </select>
        </div>

      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>ZIP code</label>
        <input type='text'className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>

      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Phone</label>
        <input type='number' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>
      <div className='flex flex-col w-[454px] h-[121px] gap-[10px]'>
      <label className='w-[223px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Email address</label>
        <input type='text' className='w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>

        <div className='flex w-[454px] h-[121px]'>
        <input type='text' placeholder='Additional information' className='flex justify-center items-center text-center w-[453px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f] text-[#9f9f9f]'/>
        </div>

    </div>

{/*part 2*/}
    <div className='flex justify-center items-center w-[608px] h-[789px]'>
      <div className='w-[533px] h-[616px]'>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md text-gray-800">

      <div className="flex justify-between mb-4">
   <h1 className="w-[94px] h-[36px] font-poppins leading-[36px] text-[24px] font-medium mb-1 text-[#000000]">Product</h1>
   <h1 className="w-[103px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#000000]">Subtotal</h1>
 </div>
      
      <div className="flex justify-between mb-4">
        <h1 className="w-[120px] h-[24px] font-poppins leading-[24px] text-[16px] font-normal mb-1 text-[#9f9f9f]">Asgaard sofa x 1</h1>
        <h2 className="w-[109px] h-[24px] font-poppins font-light text-[16px] leading-[24px] text-[#9f9f9f]">Rs. 250,000.00</h2>
      </div>

      <div className="flex justify-between mb-4">
  <h1 className="w-[70px] h-[24px] font-poppins leading-[24px] text-[16px] font-normal mb-1 text-[#000000]">Subtotal</h1>
  <h2 className="w-[109px] h-[24px] font-poppins font-light text-[16px] leading-[24px] text-[#9f9f9f]">Rs. 250,000.00</h2>
</div>

<div className="flex justify-between mb-4">
  <h1 className="w-[40px] h-[24px] font-poppins leading-[24px] text-[16px] font-normal mb-1 text-[#000000]">Total</h1>
  <h2 className="w-[178px] h-[36px] font-poppins font-bold text-[24px] leading-[36px] text-[#b88e2f]">Rs. 250,000.00</h2>
</div>

      <hr className="border-t border-gray-300 my-4" />

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order will not be shipped until the
        funds have cleared in our account.
      </p>

      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="paymentMethod"
            value="bankTransfer"
            className="w-5 h-5 text-gray-500 focus:ring-yellow-500"
          />
          <span className="font-medium text-gray-800">Direct Bank Transfer</span>
        </label>

        <label className="flex items-center space-x-2">
          <input type="radio" name="paymentMethod" value="cashOnDelivery" className="w-5 h-5 text-gray-500 focus:ring-yellow-500"/>
          <span className="font-medium text-gray-800">Cash On Delivery</span>
        </label>
      </div>

      <p className="w-[400px] h-[92px] font-poppins font-light text-[16px] leading-relaxed text-justify text-[#000000] py-[10px] mb-[40px]">
 Your personal data will be used to support your experience throughout this website, to manage access to your account,
  and for other purposes described in our privacy policy.
</p>

<div className='flex justify-center items-center w-[318px] h-[64px] rounded-[15px] border-[1px] border-[#000000] text-[#000000] mx-[40px]'>
  <button className='w-[114px] h-[30px] font-poppins font-normal text-[20px] leading-[30px]'>Place order</button>
</div>

    </div>
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

export default Checkout