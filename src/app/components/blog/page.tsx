'use client'
import React from 'react'
import Footer from '../footer/page'
import Image from "next/image"
import Sec1image from "../assets/Rectangle 1.png"
import Hero1 from "../assets/Meubel House_Logos-05.png"
import CardIcon1 from "../assets/dashicons_admin-users.png"
import CardIcon2 from "../assets/uis_calender.png"
import CardIcon3 from "../assets/ci_tag.png"
import CardImg1 from "../assets/Rectangle 68.png"
import CardImg2 from "../assets/Rectangle 68 (1).png"
import CardImg3 from "../assets/Rectangle 68 (2).png" 
import crd1 from "../assets/Rectangle 69 (3).png"
import crd2 from "../assets/Rectangle 69 (2).png"
import crd3 from "../assets/Rectangle 69.png"
import crd4 from "../assets/Rectangle 69 (1).png"
import crd5 from "../assets/Rectangle 69 (4).png"
import { FaSearch } from 'react-icons/fa'



const About = () => {
  return (
    <div className='bg-[#ffffff]'>
            {/*sec-1 start*/}
        <section className="container mx-auto">
          <div  className=" h-full ">
         <div> <Image src={Sec1image} alt="hero image" className="w-full h-full object-cover"/>
          <div className="text-center text-black text-3xl mb-4">
            <div><Image src={Hero1} alt="hero image" /> </div>
            <h1 className="text-4xl font-bold">Blog</h1>
            <nav className="flex items-center text-sm">
              <span className="text-[#090808]">Home</span>
              <span className="mx-2 text-2xl">&#8250;</span>
              <span className="text-black">Blog</span>
            </nav>
          </div>
          </div>
          </div>
  
      </section>
  {/*sec-1 end*/}  
      
   {/*sec-2 start*/}  

<div className='w-auto md:w-full lg:w-full flex flex-col justify-center items-center bg-[#ffffff] lg:gap-[250px]'>
  <div className='flex flex-col py-[20px] gap-[50px] lg:flex lg:flex-row lg:justify-center lg:py-[50px] lg:gap-[60px]'>
        
 <div className='flex flex-col justify-between w-[820px] h-[2100px] px-[180px] md:px-[160px] md:gap-[40px]'>

  <div className='w-[450px] h-[700px] flex flex-col justify-evenly px-2  md:w-[540px] lg:w-[820px] lg:h-[798px] lg:flex shadow-lg rounded-md text-gray-900 lg:gap-[10px]'>
    <div>
      <Image src={CardImg1} alt=' card 1 image' />
    </div>

    <div className='flex justify-between w-[349px] h-[24px]'>
      <div className='flex w-[80px] h-[24px]'>
        <Image src={CardIcon1} alt='icon 1' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
        <p  className='w-[53px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Admin</p>
      </div>
      <div className='flex w-[121px] h-[24px]'>
      <Image src={CardIcon2} alt='icon 2' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
      <p  className='w-[94px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>14 Oct 2022</p>
      </div>
      <div className='flex w-[78px] h-[24px]'>
      <Image src={CardIcon3} alt='icon3' className='w-[24px] h-[24px] text-[#9f9f9f]'/>
      <p  className='w-[47px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Wood</p>
      </div>

    </div>

    <div className='w-[517px] h-[45px] font-poppins font-medium text-[20px] lg:text-[30px]'>
      <h1>Going all-in with millennial design</h1>
    </div>

    <div className='lg:w-[817px] h-[115px] font-poppins font-normal text-[12px] lg:text-[16px] text-justify'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis 
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque 
          elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>

    <div className='w-[89px] h-[36px] text-[#000000] border-b-[2px] border-b-[#000000] hover:scale-110 transition duration-300 ease-in-out'>
      <button className='w-[89px] h-[24px] font-poppins font-normal text-[16px] text-justify'>Read more</button>
    </div>

  </div>


  <div className='w-[450px] h-[700px] flex flex-col justify-evenly px-2 md:w-[540px] lg:w-[820px] lg:h-[798px] lg:flex shadow-lg rounded-md text-gray-900 lg:gap-[10px]'>
    <div>
      <Image src={CardImg2} alt='card 2 image' />
    </div>

    <div className='flex justify-between w-[349px] h-[24px]'>
      <div className='flex w-[80px] h-[24px]'>
        <Image src={CardIcon1} alt='icon 1' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
        <p  className='w-[53px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Admin</p>
      </div>
      <div className='flex w-[121px] h-[24px]'>
      <Image src={CardIcon2} alt='icon 2' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
      <p  className='w-[94px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>14 Oct 2022</p>
      </div>
      <div className='flex w-[78px] h-[24px]'>
      <Image src={CardIcon3} alt='icon 3' className='w-[24px] h-[24px] text-[#9f9f9f]'/>
      <p  className='w-[47px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Handmade</p>
      </div>

    </div>

    <div className='w-[517px] h-[45px] font-poppins font-medium text-[20px] lg:text-[30px]'>
      <h1>Exploring new ways of decorating</h1>
    </div>

    <div className='lg:w-[817px] h-[115px] font-poppins font-normal text-[12px] lg:text-[16px] text-justify'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis 
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque 
          elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>

    <div className='w-[89px] h-[36px] text-[#000000] border-b-[2px] border-b-[#000000] hover:scale-110 transition duration-300 ease-in-out'>
      <button className='w-[89px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-justify'>Read more</button>
    </div>

  </div>

  <div className='w-[450px] h-[700px] flex flex-col justify-evenly px-2 md:w-[540px] lg:w-[820px] lg:h-[798px] lg:flex shadow-lg rounded-md text-gray-900 lg:gap-[10px]'>
    <div>
      <Image src={CardImg3} alt='card 3 img' />
    </div>

    <div className='flex justify-between w-[349px] h-[24px]'>
      <div className='flex w-[80px] h-[24px]'>
        <Image src={CardIcon1} alt='icon 1' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
        <p  className='w-[53px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Admin</p>
      </div>
      <div className='flex w-[121px] h-[24px]'>
      <Image src={CardIcon2} alt='icon 2' className='w-[20px] h-[20px] text-[#9f9f9f]'/>
      <p  className='w-[94px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>14 Oct 2022</p>
      </div>
      <div className='flex w-[78px] h-[24px]'>
      <Image src={CardIcon3} alt='icon 3' className='w-[24px] h-[24px] text-[#9f9f9f]'/>
      <p  className='w-[47px] h-[24px] font-poppins font-normal text-[16px] text-[#9f9f9f]'>Wood</p>
      </div>

    </div>

    <div className='w-[580px] h-[45px] font-poppins font-medium text-[20px] lg:text-[30px]'>
      <h1>Handmade pieces that took time to make</h1>
    </div>

    <div className='lg:w-[817px] h-[115px] font-poppins font-normal text-[12px] lg:text-[16px] text-justify'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis 
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque 
          elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
    </div>

    <div className='w-[89px] h-[36px] text-[#000000] border-b-[2px] border-b-[#000000] hover:scale-110 transition duration-300 ease-in-out'>
      <button className='w-[89px] h-[24px] font-poppins font-normal text-[16px] text-justify'>Read more</button>
    </div>

  </div>
 </div>
        
 <div className='flex flex-col justify-between items-center gap-[40px] w-[400px] h-[1250px] px-[410px]'>

  <div className='flex flex-col justify-between items-center w-[393px] h-[537px] md:py-[20px] lg:py-[30px] shadow-lg rounded-md text-gray-900 '>
    <div className='relative'>
  <input type="search" className="w-[311px] h-[58px] border-[2px] border-[#9f9f9f] rounded-[10px]" placeholder=""/>
  <FaSearch className='absolute top-[20px] left-[270px]' />
  </div>
  <div className='flex  justify-between w-[300px] h-[353px]'>
  <table className="table-auto w-full">
  <thead>
    <tr>
      <th className="w-[134px] h-[36px] font-poppins font-medium text-[34px] leading-[26px] px-4 py-2 text-[#000000]">Categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="w-[49px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">Crafts</td>
      <td className="w-[10px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">2</td>
    </tr>
    <tr>
      <td className="w-[55px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">Design</td>
      <td className="w-[11px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">8</td>
    </tr>
    <tr>
      <td className="w-[91px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">Handmade</td>
      <td className="w-[9px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">7</td>
    </tr>
    <tr>
  <td className="w-[57px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">Interior</td>
  <td className="w-[6px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">1</td>
</tr>
<tr>
  <td className="w-[47px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">Wood</td>
  <td className="w-[11px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#9f9f9f]">6</td>
</tr>
  </tbody>
</table>
</div>

  </div>

  <div className='w-[320px] h-[650px] shadow-lg rounded-md text-gray-900'>
    <div className='flex flex-col justify-between px-[40px] py-[40px] w-[320px] h-[618px]'>
      <div>
        <h1 className='w-[155px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#000000]'>Recent Posts</h1>
      </div>
      <div className='flex flex-col justify-between gap-[20px] '>

        <div className='flex gap-[10px] w-[252px] h-[80px] bg-[#d9d9d9] rounded-[10px] shadow-lg text-gray-900'>
          <div  className='w-[80px] h-[80px] rounded-[10px]'><Image src={crd1} alt='cd1'/></div>
          <div className='flex flex-col py-[10px] w-[160px] h-[65px]'>
            <h1 className='w-[160px] h-[42px] font-poppins font-normal text-[14px] leading-[21px] text-[#000000]'>Going all-in with millennial design</h1>
            <p className='w-[119px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]'>03 Aug 2022</p>
          </div>
        </div>

        <div className='flex gap-[10px] rounded-[10px] w-[252px] h-[80px] bg-[#d9d9d9] shadow-lg text-gray-900'>
      <div  className='w-[80px] h-[80px] rounded-[10px]'><Image src={crd2} alt='cd1'/></div>
      <div className='flex flex-col py-[10px] w-[160px] h-[65px]'>
        <h1 className='w-[160px] h-[42px] font-poppins font-normal text-[14px] leading-[21px] text-[#000000]'>Exploring new ways of decorating</h1>
        <p className='w-[119px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]'>03 Aug 2022</p>
      </div>
    </div>

    <div className='flex gap-[10px] rounded-[10px] w-[252px] h-[80px] bg-[#d9d9d9] shadow-lg text-gray-900'>
      <div  className='w-[80px] h-[80px] rounded-[10px]'><Image src={crd3} alt='cd1'/></div>
      <div className='flex flex-col py-[10px] w-[160px] h-[65px]'>
        <h1 className='w-[160px] h-[42px] font-poppins font-normal text-[14px] leading-[21px] text-[#000000]'>Handmade pieces that took time to make</h1>
        <p className='w-[119px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]'>03 Aug 2022</p>
      </div>
    </div>

    <div className='flex gap-[10px] rounded-[10px] w-[252px] h-[80px] bg-[#d9d9d9] shadow-lg text-gray-900'>
      <div  className='w-[80px] h-[80px] rounded-[10px]'><Image src={crd4} alt='cd1'/></div>
      <div className='flex flex-col py-[10px] w-[160px] h-[65px]'>
        <h1 className='w-[160px] h-[42px] font-poppins font-normal text-[14px] leading-[21px] text-[#000000]'>Modern home in Milan</h1>
        <p className='w-[119px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]'>03 Aug 2022</p>
      </div>
    </div>

    <div className='flex gap-[10px] rounded-[10px] w-[252px] h-[80px] bg-[#d9d9d9] shadow-lg text-gray-900'>
      <div  className='w-[80px] h-[80px] rounded-[10px]'><Image src={crd5} alt='cd1'/></div>
      <div className='flex flex-col py-[10px] w-[160px] h-[65px]'>
        <h1 className='w-[160px] h-[42px] font-poppins font-normal text-[14px] leading-[21px] text-[#000000]'>Colorful office redesign</h1>
        <p className='w-[119px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#9f9f9f]'>03 Aug 2022</p>
      </div>
    </div>
        
      </div>
    </div>
  </div>
 </div>

</div>

 <div className='flex justify-center items-center w-[1240px] h-[200px]'>  
  <div className='flex justify-between items-center w-[392px] h-[60px] rounded-[10px]'>
    <a href='#' className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px] bg-[#fde990] font-poppins font-normal text-[20px] leading-[30px] shadow-lg text-gray-900'>
      <p className='w-[7px] h-[30px] text-[#000000]'>1</p></a>
    <a href="#" className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px]  bg-[#fff0af] font-poppins font-normal text-[20px] leading-[30px] shadow-lg text-gray-900'>
      <p className='w-[7px] h-[30px] text-[#000000]'>2</p></a>
    <a href="#" className='flex justify-center items-center text-center w-[60px] h-[60px] rounded-[10px] bg-[#fff4c4] font-poppins font-normal text-[20px] leading-[30px] shadow-lg text-gray-900'>
      <p className='w-[7px] h-[30px] text-[#000000]'>3</p></a>
    <a href="#"className='flex justify-center items-center text-center w-[98px] h-[60px] rounded-[10px] bg-[#f6f0d5] font-poppins font-normal text-[20px] leading-[30px] shadow-lg rounded-md text-gray-900'>
      <p className='w-[43px] h-[30px] text-[#000000]'>Next</p></a>
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

export default About