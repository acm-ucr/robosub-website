"use client";
import React from "react";
import useView from "../useView";
import { questions } from "@/data/questions";
const Questions = () => {
  const [inView, ref] = useView();
  return (
    <div className="mt-6 md:mt-3 w-[95%] md:w-3/4 ">
      {questions.map((item, index) => (
        <div key={index} className="flex ml-[7%] justify-between pb-[4%]">
          <div
            ref={ref}
            className={` border-l-robosub-blue w-1/3 md:w-1/4 border-l-8 2xl:border-l-[12px] pl-[4%] text-xs md:text-base font-bold 2xl:text-2xl 
            ${inView && "animate-fade-right"} ${inView && item.animation}`}
            key={index}
          >
            {item.question}
          </div>
          <div
            className={`w-2/3 md:mr-[7%] mr-[1%] md:text-sm text-[9px] 2xl:text-xl
            ${inView && "animate-fade-left"} ${inView && item.animation}`}
            key={index}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
