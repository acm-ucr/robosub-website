"use client";
import Image from "next/image";
import useView from "../useView";

const Board = ({ image, name, role }) => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`font-sans 2xl:w-60 md:w-44 w-36 flex flex-col items-center ${
        inView && "animate-fade"
      }`}
    >
      <div
        ref={ref}
        className={`bg-gradient-to-br from-robosub-blue via-robosub-blue to-robosub-light-blue rounded-full p-1 aspect-square w-full ${
          inView && "animate-fade-down"
        }`}
      >
        <Image
          className="rounded-full object-cover aspect-square w-full"
          src={image}
          alt="picture of member"
        />
      </div>
      <p className="text-robosub-yellow 2xl:text-3xl md:text-2xl text-xl font-bold text-center">
        {" "}
        {name}{" "}
      </p>
      <p className="text-robosub-light-gray font-semibold 2xl:text-lg md:text-sm text-xs text-center">
        {role}
      </p>
    </div>
  );
};

export default Board;
