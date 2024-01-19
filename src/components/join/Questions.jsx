import React from "react";
import { questions } from "@/data/questions";
const Questions = () => {
  return (
    <div className="mt-3 w-3/4 ">
      {questions.map((item, index) => (
        <div key={index} className="flex ml-[7%] justify-between pb-[4%]">
          <div
            className=" border-l-robosub-blue w-1/4 border-l-8 pl-[4%] font-bold"
            key={index}
          >
            {item.question}
          </div>
          <div className="w-2/3 mr-[7%] text-sm" key={index}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
