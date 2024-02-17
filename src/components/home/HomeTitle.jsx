import React from "react";
import Image from "next/image";
import image1 from "@/public/home.webp";
import image2 from "@/public/blue-wave.svg";
import { SlArrowDown } from "react-icons/sl";

const HomeTitle = () => {
  return (
    <div className="w-screen relative md:-translate-y-5 -translate-y-2 -z-10 animate-fade-right animate-once animate-delay-100">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-1/2 absolute"
      />
      <div className="w-screen md:right-[7%] right-[10%] md:bottom-[30%] bottom-[12%] absolute flex flex-col items-end text-xs md:text-xl 2xl:text-3xl ">
        <p className="italic font-thin">Presenting</p>
        <p className="italic font-bold">Laviathan 2024</p>
        <SlArrowDown className="m-3 mr-9 md:mr-8 md:text-2xl" />
      </div>
      <div className="md:text-[80px] 2xl:text-[100px] text-[25px] left-[15%] absolute top-[28%]  ">
        <p className="drop-shadow-lg shadow-black font-bold text-robosub-yellow translate-y-3 md:translate-y-6 relative ">
          UCR
        </p>
        <p className="font-bold">ROBOSUB</p>
      </div>
    </div>
  );
};

export default HomeTitle;
