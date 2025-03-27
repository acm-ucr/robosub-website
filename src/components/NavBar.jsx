"use client";
import logo from "@/public/logo.webp";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div className="md:px-7 fixed z-30 h-8 md:h-[10vh] bg-robosub-black bg-opacity-60 w-screen flex md:justify-between items-center backdrop-blur text-[10px] md:text-lg 2xl:text-2xl pl-2">
      <Link className="hover:opacity-60 duration-300 w-1/5 2xl:w-1/4" href="/">
        <Image alt="logo" src={logo} />
      </Link>
      <div className="md:pl-0 pl-3 flex items-center md:w-1/2 justify-between w-3/4">
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`hover:text-robosub-yellow duration-300 border-dashed ${
              pathName === link
                ? "border-b-2 border-robosub-yellow text-robosub-yellow"
                : "text-robosub-light-gray"
            }`}
          >
            {name}
          </Link>
        ))}
        <Link
          href="/join"
          className={` bg-robosub-blue opacity-80 rounded-lg hover:opacity-60 duration-300 py-1 px-4 md:px-6`}
        >
          JOIN
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
