import React from 'react'
import Footer from "../footer/page"
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"
import Icon1 from "../assets/Vector (8).png"
import Icon2 from "../assets/bxs_phone.png"
import Icon3 from "../assets/Vector (9).png"

const Contact = () => {
  return (
    <div className='bg-[#ffffff]'>
          {/*sec-1 start*/}
                         {/* Hero Section */}
   <section className="w-auto relative md:w-full lg:w-[1440px] h-[300px] md:h-[500px] bg-cover bg-center">
     <div  className="flex flex-col items-center justify-center h-full">
     <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover absolute" />
     <div className="text-center text-black text-3xl md:text-5xl mb-4">
       <div><Image src={Hero1} alt="hero image" className="inline-block" /> </div>
       <h1 className="text-4xl font-bold mb-2">Contact</h1>
       <nav className="flex justify-between items-center text-sm md:text-base">
         <span className="text-[#090808]">Home</span>
         <span className="mx-2 text-2xl">&#8250;</span>
         <span className="text-black">Contact</span>
       </nav>
     </div>
     </div>
 </section>
  {/*sec-1 end*/} 

  {/*sec-2 start*/}

 <div className='flex flex-col justify-between items-center w-[1440px] h-[1144px] pt-[40px]'>
  <div className='flex flex-col justify-center items-center text-center w-[1058px] h-[150px] shadow-lg rounded-md text-gray-900'>
    <h1 className='w-[375px] h-[54px] font-poppins font-semibold text-[36px] leading-[54px] text-[#000000]'>Get In Touch With Us</h1>
    <p className=' w-[644px] h-[48px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
  </div>
  <div className='flex justify-between w-[1058px] h-[923px]'> 
    <div className='flex justify-between w-[393px] h-[537px] mt-[80px] shadow-lg rounded-md text-gray-900'>
      <table>
        <tr>
          <td className='flex gap-[30px]'>
          <div> <Image src={Icon1} alt='location icon' className='w-[22px] h-[28px]'/></div>
            <div className='flex flex-col justify-center'>
              <h1 className='w-[76px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#000000]'>Address</h1>
              <p className='w-[212px] h-[48px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </td>
        </tr>
        <tr>

        
          <td className='flex gap-[30px]'>
            <div><Image src={Icon2} alt='phone icon' className='w-[30px] h-[30px]'/></div>
            <div className='flex flex-col justify-center'>
              <h1 className='w-[99px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#000000]'>Phone</h1>
              <p className='w-[212px] h-[72px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
            </div>
          </td>
        </tr>
        <tr>
          <td className='flex gap-[30px]'>
          <div><Image src={Icon3} alt='watch icon' className='w-[23px] h-[23px]'/></div>
            <div className='flex flex-col justify-center'>
              <h1 className='w-[166px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#000000]'>Working Time</h1>
              <p className='w-[212px] h-[96px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
   
    <div className='flex justify-center items-center  w-[635px] h-[850px] shadow-lg rounded-md text-gray-900'>
      <form className='flex w-[531px] h-[734px]'>

        <div className='flex flex-col justify-center'>
          <div className='flex flex-col justify-center w-[530px] h-[121px]'>
            <label className='w-[112px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Your Name</label>
            <input type='text' placeholder='Enter Your Name' className='w-[530px] h-[75px] border-[1px] border-[#9f9f9f] text-[#9f9f9f] rounded-[10px]'></input>
          </div>
          <div className='flex flex-col justify-center w-[530px] h-[121px]'>
            <label className='w-[144px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Email address</label>
            <input type='text' placeholder='Enter Your Email' className='w-[529px] h-[75px] border-[1px] border-[#9f9f9f] text-[#9f9f9f] rounded-[10px]'></input>
          </div>

          <div className='flex flex-col justify-center w-[528px] h-[121px]'>
         <label className='w-[176px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Subject</label>
       <input type='text' placeholder='This is an optional' className='w-[527px] h-[75px] border-[1px] border-[#9f9f9f] rounded-[10px] text-[9f9f9f]'></input>
       </div>

          <div className='flex flex-col justify-center w-[528px] h-[166px]'>
            <label className='w-[76px] h-[24px] font-poppins font-medium text-[16px] leading-[20px] text-[#000000]'>Message</label>
            <input type='text' placeholder='Hi! i’d like to ask about' className='w-[527px] h-[120px] border-[1px] border-[#9f9f9f] rounded-[10px] txt-[#9f9f9f]'></input>
          </div>
          <div className='flex justify-center text-center items-center w-[237px] h-[48px] border-[1px] border-[#000000] rounded-[15px] mt-[30px]'>
            <button className='w-[60px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] text-[#000000]'>Submit</button>
          </div>
        </div>
      </form>
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

export default Contact