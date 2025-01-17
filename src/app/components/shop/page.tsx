import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"
import Sec2icon1 from "../assets/bi_view-list.png"
import Sec2icon2 from "../assets/ci_grid-big-round.png" 
import Sec2icon3 from "../assets/system-uicons_filtering.png"
import Sec3i1 from "../assets/Trenton_modular_sofa_31.png"
import Sec3i2 from "../assets/Mask_group_(1).png"
import Sec3i3 from "../assets/Mask_group_(2).png"
import Sec3i4 from "../assets/Mask_group_(3).png" 
import Sec3i5 from "../assets/Grain_coffee_table_1_(1).png"
import Sec3i6 from "../assets/Kent-coffee_table1.png"
import Sec3i7 from "../assets/Round_coffee_table_color_21.png"
import Sec3i8 from "../assets/Reclaimed_teak_coffeetable_1.png"
import Sec3i9 from "../assets/Mask_group_(4).png"
import Sec3i10 from "../assets/Reclaimed_teak_Sideboard_1.png"
import Sec3i11 from "../assets/SJP_0825 _1.png"
import Sec3i12 from "../assets/Bella_chair_and_table_1.png"
import Sec3i13 from "../assets/Granite_square_side_table_1.png"
import Sec3i14 from "../assets/Asgaard_sofa_1.png"
import Sec3i15 from "../assets/Mask_group_(5).png"
import Sec3i16 from "../assets/Outdoor_sofa_set_1.png"
import Footer from '../footer/page'

const Shop = () => {
  return (
    <div className='bg-[#ffffff]'>
 {/*sec-1 start*/}
    
    {/* Hero Section */}
    <section className="w-auto relative md:w-full lg:w-full h-[300px] md:h-[500px] bg-cover bg-center">
      <div  className="flex flex-col items-center justify-center h-full">
      <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover absolute" />
      <div className="text-center text-3xl md:text-5xl mb-4">
        <div><Image src={Hero1} alt="hero image" className="inline-block" /> </div>
        <h1 className="text-4xl font-bold mb-2">Shop</h1>
        <nav className="flex justify-between items-center text-sm md:text-base">
          <span className="text-[#090808]">Home</span>
          <span className="mx-2 text-2xl">&#8250;</span>
          <span className="text-black">Shop</span>
        </nav>
      </div>
      </div>
  </section>
   {/*sec-1 end*/}  

 {/*sec-2 start*/}
   <div className='flex lg:flex lg:justify-between w-full h-[100px] lg:mt-[80px] bg-[#f7e7e7] border-[2px]'>
    <div className='flex justify-between items-center text-center p-[10px] h-[100px] w-[600px] gap-[5px]'>
    <div className='flex justify-center items-center w-[40px] md:w-[60px] lg:w-[100px] h-[30px] gap-[5px]'>
      <Image src={Sec2icon3} alt='icon-1' className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[28px] lg:h-[28px]'/><p className='md:w-[60px] md:text-[15px] lg:w-[48px] h-[30px] font-poppins font-normal lg:text-[20px] leading-[30px] text-[#000000]'>Filter</p>
    </div>
    <Image src={Sec2icon2} alt='icon-2' className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[28px] lg:h-[28px]'/>
      <Image src={Sec2icon1} alt='icon-3' className='w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[28px] lg:h-[28px]'/>
    <div className='h-[20px] md:h-[40px] w-[0px] lg:h-[55px] border border-[#7a7878]'></div>
    <div className='flex w-[180px] md:[260px] lg:w-[300px] h-[37px] text-[#000000]'>
      <p className='w-[130px] text-[10px] md:w-[260px] md:text-[15px] lg:w-[300px] h-[28px] font-poppins font-medium lg:text-[20px] leading-[36px]'>Showing 1–16 of 32 results</p>
    </div>
    </div>
    
  <div className='flex lg:justify-between items-center text-center lg:p-[30px] lg:w-[500px] h-[100px] gap-[10px]'>
  <div className='flex justify-center text-center items-center w-[80px] lg:w-[126px] h-[55px]'>
 <div><p className='w-[50px] text-[15px] md:w-[60px] md:text-[15px] lg:w-[54px] h-[30px] font-poppins font-normal lg:text-[20px] leading-[30px] text-[#000000]'>Show</p></div>
 <div className='w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center lg:w-[55px] lg:h-[55px] bg-[#ffffff]'><p className='w-[40px] text-[10px] md:w-[60px] md:text-[15px] lg:w-[20px] h-[20px] font-poppins font-normal lg:text-[20px] leading-[20px] text-[#9f9f9f]'>16</p></div>
 </div>

 <div className='flex justify-center text-center items-center w-[120px] md:w-[140px] lg:w-[280px] h-[55px] gap-[2px] md:gap-[5px]'>  
 <div><p className='w-[50px] text-[12px] md:w-[60px] md:text-[15px] lg:w-[83px] h-[30px] font-poppins font-normal lg:text-[20px] leading-[30px] text-[#000000]'>Short by</p></div>
 <div className='w-[40px] text-[12px] md:w-[80px] md:h-[40px] flex justify-center items-center lg:w-[188px] lg:h-[55px] bg-[#ffffff]'><p className='w-[40px] text-[10px] md:w-[60px] md:text-[15px] lg:w-[72px] h-[30px] font-poppins font-normal lg:text-[20px] leading-[30px] text-[#9f9f9f]'>Default</p></div>
   </div>
   </div>
    </div>
   {/*sec-2 end*/}

  {/*sec-3 start*/}
  <div className='w-full h-[1810px] px-[140px] border-[#000000] border-[2px] bg-white'>

  <div className=' w-[1240px] h-[1791]'>

 <div className='lg:flex w-[1240px] h-[400px] gap-[10px]'>

   <div className='w-[310px] h-[397px]  hover:scale-110 transition duration-300 ease-in-out gap-[40px] py-[80px]'>
     <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i1} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Trenton modular sofa_3</p>
      <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
        </div>
      </div>
  
   <div className='w-[310px] h-[397px]  hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
   <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
     <Image src={Sec3i2} alt='sec1 image' className='w-[280px] h-[310px] '/>
   </div>
   <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
     <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Granite dining table with dining chair</p>
     <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
   </div>
 </div>

 <div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
   <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
     <Image src={Sec3i3} alt='sec1 image' className='w-[280px] h-[310px] '/>
   </div>
   <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
     <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Outdoor bar table and stool</p>
     <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
   </div>
 </div>

 <div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
   <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
     <Image src={Sec3i4} alt='sec1 image' className='w-[280px] h-[310px] '/>
   </div>
   <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
     <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Grain coffee table</p>
     <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 15,000.00</h1>
   </div>
 </div>
      </div>

      <div className='lg:flex w-[1240px] h-[400px] gap-[10px]'>

     <div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i5} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Grain coffee table</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] border-[2px]'>Rs. 15,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px]  hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i6} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[140px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Kent coffee table</p>
    <h1 className='w-[180px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 225,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i7} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Round coffee table_color 2</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 251,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i8} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Reclaimed teak coffee table</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] '>Rs. 25,200.00</h1>
  </div>
</div>
    </div>

    <div className='lg:flex w-[1240px] h-[400px] gap-[10px]'>

   <div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i9} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[120px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Plain console_</p>
    <h1 className='w-[160px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 258,200.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i10} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Reclaimed teak Sideboard</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 20,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i11} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[80px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>SJP_0825 </p>
    <h1 className='w-[180px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 200,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i12} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Bella chair and table</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 100,000.00</h1>
  </div>
</div>
   </div>


    <div className='lg:flex w-[1240px] h-[400px] gap-[10px]'>
      <div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i13} alt='sec1 image' className='w-[240px] h-[240px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Granite square side table</p>
    <h1 className='w-[180px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 258,800.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
<Link  href='../components/single-product' className='font-bold '>
    <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i14} alt='sec1 image' className='w-[240px] h-[200px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[100px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Asgaard sofa</p>
    <h1 className='w-[180px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 250,000.00</h1>
  </div>
  </Link>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i15} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Maya sofa three seater</p>
    <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 115,000.00</h1>
  </div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out  gap-[40px] py-[80px]'>
  <div className='flex justify-center items-center w-[280px] h-[287px] shadow-lg rounded-md text-gray-900'>
    <Image src={Sec3i16} alt='sec1 image' className='w-[280px] h-[310px] '/>
  </div>
  <div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
    <p className='w-[140px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Outdoor sofa set</p>
    <h1 className='w-[180px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 244,000.00</h1>
  </div>
</div>

    </div>


    <div className='flex justify-center items-center w-[1240px] h-[280px]'>  
  <div className='flex justify-between w-[392px] h-[60px] rounded-[10px] py-6'>
    <a href='#' className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px] bg-[#fde990] font-poppins font-normal text-[20px] leading-[30px]'>
      <p className='w-[7px] h-[30px] text-[#000000]'>1</p></a>
    <a href="#" className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px]  bg-[#fff0af] font-poppins font-normal text-[20px] leading-[30px]'>
      <p className='w-[7px] h-[30px] text-[#000000]'>2</p></a>
    <a href="#" className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px] bg-[#fff4c4] font-poppins font-normal text-[20px] leading-[30px]'>
      <p className='w-[7px] h-[30px] text-[#000000]'>3</p></a>
    <a href="#"className='flex justify-center items-center text-center w-[98px] h-[60px] rounded-[10px] bg-[#f6f0d5] font-poppins font-normal text-[20px] leading-[30px]'>
      <p className='w-[43px] h-[30px] text-[#000000]'>Next</p></a>
  </div>
</div>

    </div> 
    </div>
    {/*sec-3 end*/}

        {/*sec-4 start */}
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
    {/*sec-4 end*/}

 <div className='absolute'>
  <Footer />
</div>
</div>
  )
}

export default Shop