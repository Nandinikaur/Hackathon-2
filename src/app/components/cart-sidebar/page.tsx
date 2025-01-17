"use client"
import React from "react";
import Image from "next/image";
import Lock from "../assets/Group (3).png";
import CutMark from "../assets/Vector (11).png";
import Sofa from "../assets/Asgaard sofa 1.png";
import Link from "next/link";


const CartSidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
    return (
      <div className="flex flex-col justify-between px-[20px] py-[40px] w-[412px] h-[764px]  bg-[#ffffff]">

        <div className="flex flex-col justify-between w-[380px] h-[250px]">
        <div className="w-full h-[30px] flex justify-end items-center">
        <button onClick={closeSidebar} className="w-[30px] h-[30px] font-poppins font-medium text-[30px] leading-4 text-[#000000]">
    x
  </button>
  </div>
  <div className="flex justify-between">
            <h1 className="w-[177px] h-[36px] font-poppins font-semibold text-[24px] leading-[36px] text-[#000000]">Shopping Cart</h1>
            <Image src={Lock} alt='lock' className="w-[30px] h-[40px]"/>
        </div>
        <div>
            <hr className="w-full border-[1px] border-[#d9d9d9]"/>
        </div>
        <div className="flex justify-between w-[350px] h-[105px]">
            <Image src={Sofa} alt="sofa image"  className="w-[140px] h-[105px]" />
            <div className="w-[130px] h-[56px]">
            <h2 className="w-[108px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[3000000]">Asgaard sofa</h2>
            <div className="flex justify-between w-[130px] h-[24px]">
            <p className="w-[5px] h-[24px] font-poppins font-light text-[16px] leading-[24px] text-[#000000]">1</p>
            <p className="w-[8px] h-[18px] font-poppins font-light text-[12px] leading-[18px] text-[#000000]">X</p>
            <p className="w-[87px] h-[18px] font-poppins font-medium text-[12px] leading-[18px] text-[#b88e2f]">Rs. 250,000.00</p>
            </div>
            </div>
            <Image src={CutMark} alt="cutMark icon" className="w-[30px] h-[30px]"/>
        </div>
        </div>

        <div className="flex flex-col py-[40px] px-[30px] w-[380px] h-[160px] gap-[20px]">
            <div className="flex justify-between w-full">
                <p className="w-[68px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-[#000000]">Subtotal</p>
                <p className="w-[117px] h-[24px] font-poppins font-semibold text-[12px] leading-[24px] text-[#b88e2f]">Rs. 250,000.00</p>
            </div>
            <div>
                <hr className="w-full border-[1px] border-[#d9d9d9]"/>
            </div>
            <div className="flex gap-[20px]">
                <Link href='../components/cart'>
            <div className="flex items-center justify-center w-[131px] h-[31px] rounded-[50px] border-[1px] border-[#000000]">
                <button className="w-[58px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#000000]">View Cart</button>
                </div>
                </Link>
                <Link href='../components/checkout'>
            <div className="flex items-center justify-center w-[147px] h-[31px] rounded-[50px] border-[1px] border-[#000000]">
                <button className="flex items-center justify-center w-[58px] h-[18px] font-poppins font-normal text-[12px] leading-[18px] text-[#000000]">Checkout</button>
                </div>
                </Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default CartSidebar;
  