'use client'
import React, { useState } from "react";
import CartSidebar from "../cart-sidebar/page";
import Link from 'next/link'
import Sec1icon1 from "../assets/dashicons_arrow-down-alt2.png"
import Image from 'next/image'
import Sec2i1 from "../assets/Group 99.png"
import Sec2i2 from "../assets/Asgaard_sofa_1.png"
import Sec2Star from "../assets/Group 88.png"
import Sec2icon1 from "../assets/Vector (10).png"
import Sec2icon2 from "../assets/akar-icons_linkedin-box-fill.png"
import Sec2icon3 from "../assets/ant-design_twitter-circle-filled.png"
import Sec2icon4 from "../assets/Vector (12).png"
import Sec3i1 from "../assets/Group_107.png"
import Sec4i1 from "../assets/Trenton_modular_sofa_31.png"
import Sec4i2 from "../assets/Mask_group_(1).png"
import Sec4i3 from "../assets/Mask_group_(2).png"
import Sec4i4 from "../assets/Mask_group_(3).png"
import Footer from '../footer/page'

const SingleProduct = () => {
  // State for toggling the cart sidebar
const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
// Function to toggle sidebar
const toggleCartSidebar = () => {
  setIsCartSidebarOpen(!isCartSidebarOpen);
};
  return (
    <div className='w-[1440px] bg-[#ffffff]'>

        {/*sec-1 start*/} 
        <div className='flex justify-start items-center w-[1440px] h-[100px]'>
            <Link href='../' className='flex w-[82px] h-[24px]'>Home<Image src={Sec1icon1} alt='arrow icon'/></Link>
            <Link href='../components/shop' className='flex w-[82px] h-[24px]'>Shop<Image src={Sec1icon1} alt='arrow icon'/></Link>
            <div className='flex justify-center items-center w-[142px] h-[37px] text-[#000000] border-l-[2px] border-l-[#9f9f9f]'>
                <p> Asgaard sofa</p>
            </div>
        </div>
        {/*sec-1 end*/}

        {/*sec-2 start*/}
        <div className='flex justify-center items-center w-[1440px] h-[820px]'>
        <div className='flex justify-between w-[1241px] h-[731px]'>

          <div className='flex gap-[30px] w-[553px] h-[500px]'>
           <Image src={Sec2i1} alt='image pics' className='w-[76px] h-[416px]' /> 
           <div className='w-[481px] h-[500px]'>            
           <Image src={Sec2i2} alt='sofa image' className='w-[423px] h-[500px] rounded-[10px] bg-[#fff9e5]' /> 
           </div> 

          </div>

          <div className='flex flex-col justify-between w-[606px] h-[731px]'>
            <div className='w-[282px] h-[63px] font-poppins font-normal text-[42px] leading-[63px] text-[#000000]'>
              <h1>Asgaard sofa</h1>
            </div>

            <div className='w-[173px] h-[36px] font-poppins font-medium text-[24px] leading-[36px] text-[#9f9f9f]'>
              <p>Rs. 250,000.00</p>
            </div>

            <div className='flex gap-[20px]'>
              <div className='w-[124px] h-[20px]'>
                <Image src={Sec2Star} alt='star' />
              </div>
              <div className='h-[20px] border-[1px] border-[#9f9f9f]'></div>
              <div className='w-[125px] h-[20px] font-poppins font-normal text-[13px] leading-[19.5px] text-[#1d0a0a]'>
                <p>5 Customer Review</p>
                </div>
            </div>

            <div className='w-[424px] h-[80px] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'>
              <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
              </div>

            <div className='flex flex-col justify-between w-[123px] h-[63px]'>
              <p className='w-[27px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#9f9f9f]'>Size</p>
              <div className='flex gap-[20px]'>
                <button className='w-[30px] h-[30px] rounded-[5px] bg-[#efd56a] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'>L</button>
                <button className='w-[30px] h-[30px] rounded-[5px] bg-[#e4d595] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'>XL</button> 
                <button className='w-[30px] h-[30px] rounded-[5px] bg-[#efefd7] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'>XS</button> 

              </div>
            </div>

            <div className='flex flex-col justify-between w-[123px] h-[63px]'>
  <p className='w-[27px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#9f9f9f]'>Color</p>
  <div className='flex gap-[20px]'>
    <button className='w-[30px] h-[30px] rounded-[50%] bg-[#4326d5] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'></button>
    <button className='w-[30px] h-[30px] rounded-[50%] bg-[#000000] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'></button> 
    <button className='w-[30px] h-[30px] rounded-[50%] bg-[#cdba7b] font-poppins font-normal text-[13px] leading-[19.5px] text-[#000000]'></button> 
  </div>
</div>
            <div className='flex gap-[20px]'>
              <div className='w-[123px] h-[64px] rounded-[10px] border-[1px] text-[#000000] border-[#9f9f9f]'>
                <button  className='flex justify-center w-[123px] h-[24px] font-poppins font-medium text-[20px] leading-[60px] text-[#000000]'  >-  1 +</button>
              </div>

              <div className='w-[215px] h-[64px] rounded-[15px] border-[1px] text-[#000000] border-[#9f9f9f]'>
                <button onClick={toggleCartSidebar} className='flex justify-center w-[215px] h-[30px] font-poppins font-normal text-[20px] leading-[60px] text-[#000000]'>ADD TO CART</button>
              </div>

            </div>
            <div className='w-[605px] border-[1px] border-[#d9d9d9]'></div>
            <div className='flex flex-col justify-between w-[400px] h-[200px]'>
              <div className='flex w-[100px] h-[24px] font-poppins font-normal text-[16px] leading-[24px]'><p>SKU : SS001</p></div>
              <div><p>Category : Sofas</p></div>
              <div><p>Tags : Sofa, Chair, Home, Shop</p></div>
              <div className='flex justify-between w-[400px]'><p className='flex justify-between w-[200px]'>Share : 
                <Image src={Sec2icon1} alt='' />
                <Image src={Sec2icon2} alt='' />
                <Image src={Sec2icon3} alt='' />
                 </p>
                 <div>
                 <Image src={Sec2icon4} alt='' />
                 </div>
                 </div>
            </div>
          </div>
        </div>
        </div>

        {/*sec-2 end*/}

{/*sec-3 start*/}
  <div className='flex flex-col justify-center items-center w-[1440px] h-[744px] border-t-[1px] border-t-[#9f9f9f] py-[80px] gap-[40px]'>
   <div className='w-[700px] h-[36px]'>
    <ul className='flex justify-between'>
        <li><a href='#' className='w-[136px] h-[36px] font-poppins font-normal text-[24px] leading-[36px] text-[#000000]'>Description</a></li>
        <li><a href='#' className='w-[136px] h-[36px] font-poppins font-normal text-[24px] leading-[36px] text-[#9f9f9f]'>Additional Information</a></li>
        <li><a href='#' className='w-[136px] h-[36px] font-poppins font-normal text-[24px] leading-[36px] text-[#9f9f9f]'>Reviews[5]</a></li>
    </ul>
   </div>

   <div className='flex flex-col gap-[30px] w-[1026px] h-[174px]'>
    <p className='w-[1026px] h-[48px] font-poppins font-normal text-[16px] leading-[24px] text-justify text-[#9f9f9f]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    <p className='w-[1026px] h-[96px] font-poppins font-normal text-[16px] leading-[24px] text-justify text-[#9f9f9f]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
   </div>

   <div className='flex w-[1239px] h-[348px] gap-[30px]'>
    <Image src={Sec3i1} alt='sec3 image' className='w-[605px] h-[348px]'/>
    <Image src={Sec3i1} alt='sec3 image' className='w-[605px] h-[348px]'/>
     </div>
  </div>
{/*sec-3 end*/}

{/*sec-4 start*/}
<div className='flex flex-col justify-between items-center w-[1440px] h-[777px] bg-[#ffffff] border-t-[1px] border-t-[#9f9f9f] py-[40px]'>

    <div className='w-[309px] h-[54px] font-poppins font-medium text-[36px] leading-[54px] text-[#000000]'>
        <h1>Related Products</h1>
        </div>
<div className='flex w-[1240px] h-[400px]'>

<div className='w-[310px] h-[397px]  hover:scale-110 transition duration-300 ease-in-out'>
  <div className='flex justify-center items-center w-[280px] h-[287px]'>
 <Image src={Sec4i1} alt='sec1 image' className='w-[280px] h-[310px] '/>
</div>
<div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
 <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Trenton modular sofa_3</p>
   <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
     </div>
   </div>

<div className='w-[310px] h-[397px]  hover:scale-110 transition duration-300 ease-in-out'>
<div className='flex justify-center items-center w-[280px] h-[287px]'>
  <Image src={Sec4i2} alt='sec1 image' className='w-[280px] h-[310px] '/>
</div>
<div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
  <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Granite dining table with dining chair</p>
  <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
</div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out'>
<div className='flex justify-center items-center w-[280px] h-[287px]'>
  <Image src={Sec4i3} alt='sec1 image' className='w-[280px] h-[310px] '/>
</div>
<div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
  <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Outdoor bar table and stool</p>
  <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 25,000.00</h1>
</div>
</div>

<div className='w-[310px] h-[397px] hover:scale-110 transition duration-300 ease-in-out'>
<div className='flex justify-center items-center w-[280px] h-[287px]'>
  <Image src={Sec4i4} alt='sec1 image' className='w-[280px] h-[310px] '/>
</div>
<div className='flex flex-col justify-between w-[212px] h-[105px] py-[10px]'>
  <p className='w-[210px] h-[28px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]'>Grain coffee table</p>
  <h1 className='w-[158px] h-[36px] font-poppins font-medium text-[24px] leading-[36px]'>Rs. 15,000.00</h1>
</div>
</div>
   </div>

   <div className='w-[115px] h-[49px] text-[#000000] font-poppins font-medium text-[20px] leading-[30px] underline hover:scale-110 transition duration-300 ease-in-out'>View More</div>
   
   </div>
{/*sec-4 end*/}

 {/* Cart Sidebar */}
 {isCartSidebarOpen && (
   <div className="flex fixed justify-end top-0 left-0 h-full w-[1440px] bg-black z-50 bg-opacity-50">
     <CartSidebar closeSidebar={() => setIsCartSidebarOpen(false)}/>
   </div>
 )}

<div className='absolute'>
  <Footer />
</div>
    </div>
  )
}

export default SingleProduct