"use client";
import React from "react";
import Button from "../Button";
import useView from "../useView";

const JoinTeam = ({ icon, title, text, animation }) => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`w-[280px] md:w-[400px] 2xl:w-[530px] items-center flex md:mx-10 my-5 mx-5 ${
        inView && "animate-fade-right"
      } ${inView && animation}`}
    >
      <div className="font-sans text-5xl md:text-[84px] 2xl:text-8xl aspect-square w-2/5 md:w-[45%] rounded-full flex justify-center items-center bg-gradient-to-br to-black from-robosub-dark-gray">
        {icon}
      </div>

      <div className=" flex flex-col items-center leading-4 font-sans md:w-3/4 w-[85%] pl-6 pt-4">
        <p className="font-bold text-base md:text-xl 2xl:text-3xl">{title}</p>

        <p className="pt-4 pb-2 font-light leading-4 text-[10px] md:text-xs 2xl:text-lg">
          {text}
        </p>
        <div className="w-full flex justify-end pr-2 md:pr-0">
          <Button link="/join" text="TEAM" />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
