import React from "react";
import Image from "next/image";
import image1 from "../../public/home.png";
import image2 from "../../public/blue-wave.svg";
import { SlArrowDown } from "react-icons/sl";

const HomeTitle = () => {
  return (
    <div className="w-full">
      <Image
        src={image1}
        alt="Background image 1"
        className="object-cover h-[100vh] scale-100 w-full"
      />
      <div className="mt-[30%] absolute top-4 flex flex-col z-20">
        <Image
          src={image2}
          alt="Background image 2"
          className="w-full object-contain"
        />
      </div>
      <div className="w-full pr-20 mt-[29%] absolute top-20 flex flex-col items-end z-20">
        <p className="italic font-thin">Presenting</p>
        <p className="italic font-bold">Laviathan 2024</p>
        <SlArrowDown className="m-3 mr-8 text-2xl" />
      </div>
      <div className="w-full pl-20 mt-[19%] absolute top-0 flex flex-col items-start z-20">
        <p className="text-6xl font-bold m-1 ml-14 text-robosub-yellow">UCR</p>
        <p className="text-7xl font-extrabold m-1 ml-14">ROBOSUB</p>
      </div>
    </div>
  );
};

export default HomeTitle;
