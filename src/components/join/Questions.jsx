import React from "react";
import { questions } from "@/data/questions";
const Questions = () => {
  return (
    <div className="pt-[6%] w-full ">
      {questions.map((item, index) => (
        <div key={index} className="flex ml-[7%] justify-between pb-[3%]">
          <div
            className=" border-l-robosub-blue w-1/4 border-l-8 pl-[4%] text-xl font-bold"
            key={index}
          >
            {item.question}
          </div>
          <div className="w-2/3 mr-[7%]" key={index}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
