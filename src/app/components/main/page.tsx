import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sec1bgimg from "../assets/Rocket_single_seater_1.png";
import Sec2img1 from "../assets/Granite_square_side_table_1.png";
import Sec2img2 from "../assets/Maskgroup.png";
import Sec3img1 from "../assets/Mask_group_(1).png";
import Sec3img2 from "../assets/Mask_group_(2).png";
import Sec3img3 from "../assets/Mask_group_(3).png";
import Sec3img4 from "../assets/Trenton_modular_sofa_31.png";
import Sec4img1 from "../assets/Asgaard_sofa_1.png";
import Sec5img1 from "../assets/Rectangle 13.png";
import Sec5img2 from "../assets/Rectangle-14.png";
import Sec5img3 from "../assets/Rectangle 15.png";
import Sec5icon1 from "../assets/Group (2).png";
import Sec5icon2 from "../assets/uil_calender.png";  
import Footer from "../footer/page";

const Main = () => {
  return (
    <div className="container mx-auto h-auto bg-[#ffffff]">
      {/*sec-1 start*/}
      <div className="flex flex-col-reverse sm:flex md:flex-row justify-center items-center  bg-[#fbebb5]">
        <div className="h-[150px] flex flex-col justify-center items-center sm:w-auto lg:w-[1440px] lg:h-[276px] gap-[20px]">
          <div className="flex flex-col justify-center items-center text-center w-full h-[80px] sm:h-[130px]  lg:w-[440px] lg:h-[192px]">
            <h1 className="font-poppins font-medium text-[20px] sm:text-[48px] lg:text-[64px] leading-[96px] text-[#000000]">
              Rocket single seater
            </h1>
          </div>

          <div className="flex justify-center w-[121px] h-[49px] lg:w-[151px] lg:h-[36px] text-center items-center">
            <button className="w-[100px] h-[30px] text-[12px] sm:w-[140px] sm:h-[36px] sm:text-[20px] lg:w-[150px] lg:h-[36px] font-poppins font-medium lg:text-[24px] leading-[36px] text-[#000000] border-b-[2px] border-b-[black] hover:scale-110 transition duration-300 ease-in-out">
              Order Now
            </button>
          </div>
        </div>

        <div className="w-[320px] h-[200px] sm:w-[568px] sm:h-[400px] lg:w-[1353px] lg:h-[600px]">
          <Image
            src={Sec1bgimg}
            alt="sofa image"
            className="aspect-square w-full rounded-lg object-cover xl:aspect-[7/8] h-[250px] sm:w-[568px] sm:h-[400px] lg:w-[1353px] lg:h-[600px]"
          />
        </div>
      </div>
      {/*sec-1 end*/}

      {/*sec-2 start*/}
      <div className="container mx-auto px-8 py-8 gap-[200px] flex flex-col md:flex md:flex-row md:gap-[20px] h-[800px] sm:h-[400px] lg:h-[800px]">
        <div className="flex flex-col justify-center items-center py-[150px] w-full h-[200px] md:h-[320px] lg:w-[615px] lg:h-[562px] hover:scale-110 transition duration-300 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900">
          <Image
            src={Sec2img1}
            alt="table image"
            className="pt-[30px] w-[400px] h-[200px] lg:w-[892px] lg:h-[641px]"
          />
          <div className="flex flex-col px-2 sm:p-10 lg:pt-28 lg:justify-center items-center text-start w-[300px] h-[80px] lg:gap-4">
            <div className="w-[182px] h-[44px] lg:w-[228px] lg:h-[54px]">
              <h1 className="text-center font-poppins font-medium text-[20px] lg:text-[36px] leading-[24px] text-[#000000]">
                Side table
              </h1>
            </div>

            <div className="flex flex-col justify-center w-[70px] lg:w-[125px] h-[49px] gap-[10px]">
              <Link
                href="../components/shop"
                className="text-center font-poppins font-medium text-[12px] lg:text-[24px] leading-[24px] text-[#000000]  border-b-2 border-b-black"
              >
                View More
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-[150px] w-full h-[200px] md:h-[320px] lg:w-[615px] lg:h-[562px] hover:scale-110 transition duration-200 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900">
          <Image
            src={Sec2img2}
            alt="table image"
            className="pt-[30px] w-[400px] h-[200px] lg:w-[892px] lg:h-[641px]"
          />
          <div className="flex flex-col px-2 sm:p-10 lg:pt-28 lg:justify-center items-center text-start w-[300px] h-[80px] lg:gap-4">
            <div className="w-[182px] h-[44px] lg:w-[228px] lg:h-[54px]">
              <h1 className="text-center font-poppins font-medium text-[20px] lg:text-[36px] leading-[24px] text-[#000000]">
                2 Sitter Sofa
              </h1>
            </div>

            <div className="flex flex-col justify-center w-[70px] lg:w-[125px] h-[49px] gap-[10px]">
              <Link
                href="../components/shop"
                className="text-center font-poppins font-medium text-[12px] lg:text-[24px] leading-[24px] text-[#000000] border-b-2 border-b-black"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*sec-2 end*/}

      {/*sec3 start*/}
      <div className="bg-white">
        <div className="flex flex-col gap-[40px] mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-[40px] lg:max-w-7xl lg:px-8 ">
          <div className="flex flex-col justify-between items-center text-center gap-[20px]">
            <h1 className="w-[311px] h-[54px] font-poppins font-medium text-[25px] sm:text-[30px] lg:text-[36px] text-[#000000]">
              Top Picks For You
            </h1>
            <p className="lg:w-[773px] h-[24px] font-poppins font-medium text-[12px] sm:text-[14px] lg:text-[16px] text-[#9f9f9f]">
              Find a bright ideal to suit your taste with our great selection of
              suspension, floor and table lights.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link
              href="#"
              className="group hover:scale-110 transition duration-300 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900">
              <Image
                src={Sec3img4}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="aspect-square w-full rounded-lg bg-white object-cover xl:aspect-[7/8]"/>
              <h3 className="mt-4 pl-4 text-sm text-black">Trento modular sofa_3</h3>
              <p className="mt-1 pl-4 text-sm font-medium text-black">
                Rs.25,000.00
              </p>
            </Link>
            <Link
              href="#"
              className="group hover:scale-110 transition duration-300 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900"
            >
              <Image
                src={Sec3img1}
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="aspect-square w-full rounded-lg bg-white object-cover xl:aspect-[7/8]"
              />
              <h3 className="mt-4 pl-4 text-sm text-gray-900">
                Granite dining table with dining chair
              </h3>
              <p className="mt-1 pl-4 text-lg font-medium text-black">
                Rs.25,000.00
              </p>
            </Link>
            <Link
              href="#"
              className="group hover:scale-110 transition duration-300 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900"
            >
              <Image
                src={Sec3img2}
                alt="Person using a pen to cross a task off a productivity paper card."
                className="aspect-square w-full rounded-lg bg-white object-cover xl:aspect-[7/8]"
              />
              <h3 className="mt-4 pl-4 text-sm text-black">
                Outdoor bar table and stool
              </h3>
              <p className="mt-1 pl-4 text-lg font-medium text-black">
                Rs.25,000.00
              </p>
            </Link>
            <Link
              href="#"
              className="group hover:scale-110 transition duration-300 ease-in-out pb-[10px] shadow-lg rounded-md text-gray-900">
              <Image
                src={Sec3img3}
                alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                className="aspect-square w-full rounded-lg bg-white object-cover xl:aspect-[7/8]"
              />
              <h3 className="mt-4 pl-4 text-sm text-black">
                Plain console with teak mirror
              </h3>
              <p className="mt-1 pl-4 text-lg font-medium text-black">
                Rs.25,000.00
              </p>
            </Link>

          </div>
    

  <Link
    href="../components/shop"
    className="w-full h-[30px] text-center font-poppins font-medium text-[20px] leading-[30px] text-[#000000] underline-offset-1 underline black hover:scale-110 transition duration-300 ease-in-out">
    View More
  </Link>
      </div>

      </div>

  

{/*sec-3 end*/}


      {/*sec-4 start*/}
<div className='container mx-auto flex flex-col lg:flex lg:flex-row px-4 py-4 bg-[#fff9e5]'>
  <div className='w-[200px] h-[200px] sm:w-[520px] sm:h-[520px] lg:w-full lg:h-[520px]'>
  <Image src={Sec4img1} alt='sofa image' 
  className="w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:-[750px]"/>
  </div>

  <div className='flex flex-col justify-between items-end w-full h-[100px] lg:w-auto lg:h-[180px] lg:items-center gap-[10px] lg:my-44'>
   
    <div className='flex flex-col justify-end items-center text-center w-[150px] h-[60px] lg:w-[331px] lg:h-[108px]'>
      <h3 className='w-[149px] h-[36px] font-poppins font-medium text-[16px] lg:text-[24px] text-[#000000]'>New Arrivals</h3>
      <h1 className='w-[150px] h-[72px] sm:w-[180px] lg:w-[300px] font-poppins font-bold text-[20px] lg:text-[38px] text-[#000000]'>Asgaard sofa</h1>
    </div>
    <Link  href='../components/shop'>
    <div className='flex justify-center w-[100px] h-[25px] lg:w-[255px] lg:h-[64px] border-[1px] text-center items-center border-[#000000] hover:bg-[#fff1bd]'>
      <button className='font-poppins font-normal text-[14px] lg:text-[20px] text-[#000000] hover:scale-110 transition duration-300 ease-in-out'>Order Now</button>
    </div>
    </Link>
  
  </div>
</div>
 {/*sec-4 end*/}

{/*sec-5 start*/}

  <section className="text-gray-600 body-font">
  <div className='flex flex-col justify-center items-center text-center w-full lg:w-full h-[120px] gap-[12px]'>
  <h1 className='w-[174px] h-[44px] font-poppins font-medium text-[36px] text-[#000000]'>Our Blogs</h1>
  <p className='w-full sm:w-full h-[174px] font-poppins font-medium text-[14px] sm:text-[18px]  lg:text-[20px] py-3 text-[#9f9f9f]'>Find a bright ideal to suit your taste with our great selection</p> 
</div>


  <div className="container px-5 pt-[40px] mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out shadow-lg">
          <Image
            className="lg:h-[300px] md:h-[280px] w-full object-cover object-center"
            src={Sec5img1}
            alt="card-1"
          />
          <div className="flex flex-col p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Going all-in with millennial design
            </h1>
            <div className="flex flex-col items-center flex-wrap gap-4">
              <Link href='#' className="text-black font-poppins font-medium text-lg lg:text-xl inline-flex items-center md:mb-2 lg:mb-0 border-b-[2px] border-b-black hover:scale-110 transition duration-300 ease-in-out">
                Read More
              </Link>
              <div className='flex'>
              <span className="text-black mr-3 flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                <Image src={Sec5icon1} alt='sec5 icon1' className='w-4 h-4'
                /> 
                 5 min
              </span>
              <span className="text-black inline-flex items-center leading-none text-sm">
              <Image src={Sec5icon2} alt='sec5 icon1' className='w-4 h-4'
              /> 
                12<sup>th</sup> Oct 2022
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
   <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out shadow-lg">
     <Image
       className="lg:h-[300px] md:h-[280px] w-full object-cover object-center"
       src={Sec5img2}
       alt="card-1"
     />
     <div className="flex flex-col p-6">
       <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Going all-in with millennial design
       </h1>
       <div className="flex flex-col items-center flex-wrap gap-4">
         <Link href='#' className="text-black font-poppins font-medium text-lg lg:text-xl inline-flex items-center md:mb-2 lg:mb-0 border-b-[2px] border-b-black hover:scale-110 transition duration-300 ease-in-out">
          Read More
         </Link>
         <div className='flex'>
         <span className="text-black mr-3 flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
           <Image src={Sec5icon1} alt='sec5 icon1' className='w-4 h-4'
           /> 
            5 min
         </span>
         <span className="text-black inline-flex items-center leading-none text-sm">
         <Image src={Sec5icon2} alt='sec5 icon1' className='w-4 h-4'
         /> 
           12<sup>th</sup> Oct 2022
         </span>
         </div>
       </div>
     </div>
   </div>
 </div>

 <div className="p-4 md:w-1/3">
   <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out shadow-lg">
     <Image
       className="lg:h-[300px] md:h-[280px] w-full object-cover object-center"
       src={Sec5img3}
       alt="card-1"
     />
     <div className="flex flex-col p-6">
       <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Going all-in with millennial design
       </h1>
       <div className="flex flex-col items-center flex-wrap gap-4">
         <Link href='#' className="text-black font-poppins font-medium text-lg lg:text-xl inline-flex items-center md:mb-2 lg:mb-0 border-b-[2px] border-b-black hover:scale-110 transition duration-300 ease-in-out">
           Read More
         </Link>
         <div className='flex'>
         <span className="text-black mr-3 flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
           <Image src={Sec5icon1} alt='sec5 icon1' className='w-4 h-4'
           /> 
            5 min
         </span>
         <span className="text-black inline-flex items-center leading-none text-sm">
         <Image src={Sec5icon2} alt='sec5 icon1' className='w-4 h-4'
         /> 
           12<sup>th</sup> Oct 2022
         </span>
         </div>
       </div>
     </div>
   </div>
 </div>

    </div>
  </div>
  <div className='flex justify-center w-full h-[49px] items-center text-[#000000]  hover:scale-110 transition duration-300 ease-in-out my-6'><Link href='../components/blog' className='w-[120px] h-[30px] font-poppins font-medium text-[16px] sm:text-[20px] text-center text-[#000000] border-b-[2px] border-b-[#000000]'>View All Post</Link></div>

</section>

{/*sec-5 end*/}

      {/*sec-6 start*/}
<div className='container mx-auto'>
  <div className='bg-Sec6bgImg bg-cover bg-center h-[300px] w-full py-[40px]'>
  <div className='flex flex-col justify-center items-center w-full h-[200px] gap-[10px]'>
    <div className='flex flex-col text-center rounded-[50px]'>
      <h1 className='font-poppins font-bold text-[20px] sm:text-[60px]'>Our Instagram</h1>
      <p className='font-poppins font-normal text-[14px] sm:text-[20px]'>Follow our store on Instagram</p>
    </div>
    <div className='w-[200px] h-[50px] sm:w-[255px] sm:h-[64px] rounded-[50px] shadow-[0_20px_20px_0_rgba(0,0,0,0.2)] bg-[#f4f4f4] text-center py-[15px] hover:scale-110 transition duration-300 ease-in-out'>
      <button className='font-poppins font-normal text-[16px] sm:text-[20px] text-center text-[#000000]'>Follow us</button>
    </div>
  </div>
  </div>
  </div>
{/*Sec-6 end*/}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
