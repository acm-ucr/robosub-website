import React from "react";
import Image from "next/image";
import image1 from "../../public/home.png";
import image2 from "../../public/blue-wave.svg";
import { SlArrowDown } from "react-icons/sl";

const HomeTitle = () => {
  return (
    <div className="w-full relative -translate-y-5">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-1/2 absolute z-10"
      />
      <div className="w-full right-[7%] bottom-[30%] absolute flex flex-col items-end z-10 text-xl">
        <p className="italic font-thin">Presenting</p>
        <p className="italic font-bold">Laviathan 2024</p>
        <SlArrowDown className="m-3 mr-8 text-2xl" />
      </div>
      <div className="text-[80px] w-full left-[15%] absolute top-[28%] z-10">
        <p className="drop-shadow-lg shadow-black font-bold text-robosub-yellow translate-y-6 relative">
          UCR
        </p>
        <p className="font-bold">ROBOSUB</p>
      </div>
    </div>
  );
};

export default HomeTitle;
