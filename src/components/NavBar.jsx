"use client";
import logo from "@/public/logo.png";
import React, { useState } from "react";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";

const NavBar = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="md:px-7 fixed z-30 h-8 md:h-[10vh] bg-robosub-black bg-opacity-60 w-screen flex md:justify-between items-center backdrop-blur text-[10px] md:text-lg pl-2">
      <Link
        onClick={() => {
          setSelected("");
        }}
        className="hover:opacity-60 duration-300 w-1/5"
        href="/"
      >
        <Image alt="logo" src={logo} />
      </Link>
      <div className="md:pl-0 pl-3 flex items-center md:w-1/2 justify-between w-3/4">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-robosub-yellow duration-300 border-dashed ${
              selected === item.name
                ? "border-b-2 border-robosub-yellow text-robosub-yellow"
                : "text-robosub-light-gray"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/join"
          className={` bg-robosub-blue opacity-80 rounded-lg hover:opacity-60 duration-300 py-1 px-4 md:px-6`}
          onClick={() => {
            setSelected("");
          }}
        >
          JOIN
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
