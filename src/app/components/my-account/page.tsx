'use client'
import React from 'react'
import Footer from "../footer/page"
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"

const Account = () => {
  return (
    <div className='bg-[#ffffff]'>
      {/*sec-1 start*/}
                     {/* Hero Section */}
   <section className="w-auto relative md:w-full lg:w-[1440px] h-[300px] md:h-[500px] bg-cover bg-center">
     <div  className="flex flex-col items-center justify-center h-full">
     <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover absolute" />
     <div className="text-center text-black text-3xl md:text-5xl mb-4">
       <div><Image src={Hero1} alt="hero image" className="inline-block" /> </div>
       <h1 className="text-4xl font-bold mb-2">Account</h1>
       <nav className="flex justify-between items-center text-sm md:text-base">
         <span className="text-[#090808]">Home</span>
         <span className="mx-2 text-2xl">&#8250;</span>
         <span className="text-black">Account</span>
       </nav>
     </div>
     </div>
 </section>
  {/*sec-1 end*/}  
      
      {/*sec-2 start*/}
      <div className='flex justify-center items-center w-[1440px] h-[760px] gap-[60px]'>
         <div className='flex flex-col justify-center items-center  w-[608px] h-[630px] gap-[40px] shadow-lg rounded-md text-gray-900'>
         <div className='w-[107px] h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000]'><h1>Log In</h1></div>

          <div className='flex flex-col w-[424px] h-[121px gap-[20px]'>
            <label className='w-[224px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Username or email address</label>
            <input type="text" placeholder='Username or email address *' className='w-[423px] h-[75px] border-[1px] rounded-[10px] border-[#9f9f9f] p-[20px] text-[20px] font-poppins font-normal leading-[30px] text-[#9f9f9f]'/>
            </div>
          <div  className='flex flex-col w-[424px] h-[121px gap-[20px]'>
            <label  className='w-[224px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Password</label>
            <input type="text" placeholder='Password *' className='w-[423px] h-[75px] border-[1px] border-[#9f9f9f] rounded-[10px] p-[20px] text-[20px] font-poppins font-normal leading-[30px] text-[#9f9f9f]'/>
            </div>
          <div className='flex h-[30px] mr-[250px] gap-[10px]'>
            <input type='checkbox' className='w-[30px] h-[27px] '/><p className='w-[120px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Remember me</p>
            </div>
            <div className='flex gap-[40px]'>
            <div className='flex justify-center text-center items-center w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#9f9f9f]  hover:bg-[#9f9f9f]'>
          <button className='w-[58px] h-[30px] text-[#000000] font-poppins font-normal text-[20px] leading-[30px]'>Login</button>
          </div>
          <a href='#' className='w-[160px] h-[24px] underline font-Poppins font-light text-[16px] leading-[24px] mt-[20px] text-[#000000] hover:scale-110 transition duration-300 ease-in-out'>Lost Your Password?</a>
          </div>

         </div>

         <div className='flex flex-col justify-between pl-[100px] py-[50px] gap-[20px] w-[608px] h-[630px] shadow-lg rounded-md text-gray-900'>
          <div className='w-[151px] h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000]'>
            <h1>Register</h1>
            </div>

          <div className='w-[424px] h-[121px]'>
            <label className='w-[115px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Email address</label>
            <input className='w-[423px] h-[75px] rounded-[10px] border-[1px] border-[#9f9f9f]'></input>
            </div>

          <div className='w-[453px] h-[48px] font-poppins font-light text-[16px] leading-[24px] text-[#000000]'>
            <p>A link to set a new password will be sent to your email address.</p>
            </div>

          <div className='w-[453px] h-[96px] font-poppins font-light text-[16px] leading-[24px] text-[#000000]'>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b className='font-poppins font-semibold text-[16px] leading-[24px] text-justify'>privacy policy</b>.</p>
            </div>

          <div className='flex justify-center text-center items-center w-[215px] h-[64px] rounded-[15px] border-[1px] border-[#9f9f9f]  hover:bg-[#9f9f9f]'>
            <button className='w-[81px] h-[30px] font-poppins font-normal text-[20px] leading-[30px] text-[#000000]'>Register</button>
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

export default Account