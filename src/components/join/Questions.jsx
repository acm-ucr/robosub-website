import React from "react";
import { questions } from "@/data/questions";
const Questions = () => {
  return (
    <div className="mt-3 w-3/4">
      {questions.map((item, index) => (
        <div
          key={index}
          className="flex ml-[7%] justify-between pb-[4%] md:mr-[0%] mr-[-8%]"
        >
          <div
            className=" border-l-robosub-blue text-sm lg:w-1/4 border-l-8 pl-[4%] md:pr-[0%] pr-[8%] font-bold "
            key={index}
          >
            {item.question}
          </div>
          <div
            className="w-2/3 md:max-w-full mr-[7%] text-xs pr-2 md:pr-8"
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
