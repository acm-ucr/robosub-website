import logo from "../public/team-logo.png";
import img1 from "../public/footer-blue-wave.svg";
import Link from "next/link";
import Image from "next/image";
import { links } from "../data/footerLinks";

const Footer = () => {
  return (
    <div className="w-full px-10 bg-white h-[33vh] flex justify-between font-sans relative">
      <Image
        alt="img1"
        src={img1}
        className="w-screen absolute left-0 bottom-1/3 -z-10"
      />
      <Link
        href="/"
        className="flex w-[28%] items-center hover:opacity-60 duration-300"
      >
        <Image alt="logo" src={logo} className=" object-contain" />
        <div className="text-robosub-dark-gray text-3xl ml-2">
          <p className="font-medium">ROBOSUB</p>
          <p>UCR</p>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center text-robosub-black text-xl">
        <p className="font-bold">University of California, Riverside</p>
        <p className="font-bold">Autonomous Underwater Vechicle</p>
        <p>Winston Chung Hall, Riverside, CA</p>
      </div>
      <div className="flex items-center text-robosub-black">
        <div className="text-xl flex flex-col items-end">
          <p>Contact Us</p>
          <p className="font-bold">robosubucr@gmail.com</p>
        </div>
        <div className="text-5xl border-l-black border-l-2 pl-6 ml-7">
          {links.map((item, index) => (
            <Link
              href={item.link}
              target="_blank"
              key={index}
              className="hover:text-robosub-yellow hover:text-[45px] duration-300"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
