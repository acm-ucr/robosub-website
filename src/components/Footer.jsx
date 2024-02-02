import logo from "@/public/team-logo.png";
import img1 from "@/public/footer-blue-wave.svg";
import Link from "next/link";
import Image from "next/image";
import { links } from "../data/footerLinks";

const Footer = () => {
  return (
    <div className="w-full px-10 py-3 md:py-0 bg-white md:h-[33vh] md:flex justify-between font-sans relative">
      <Image
        alt="img1"
        src={img1}
        className="w-screen absolute left-0 bottom-[90%] md:bottom-1/3 -z-10"
      />
      <Link
        href="/"
        className="flex w-[28%] items-center hover:opacity-60 duration-300 right-10"
      >
        <Image
          alt="logo"
          src={logo}
          className=" md:w-auto w-14 mr-2 md:mr-0 object-contain"
        />
        <div className="text-robosub-dark-gray text-3xl ml-2">
          <p className="font-medium">ROBOSUB</p>
          <p>UCR</p>
        </div>
      </Link>
      <div className="flex flex-col justify-center items-center text-robosub-black text-sm md:text-xl my-5 md:my-0">
        <p className="font-bold">University of California, Riverside</p>
        <p className="font-bold">Autonomous Underwater Vechicle</p>
        <p>Winston Chung Hall, Riverside, CA</p>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center text-robosub-black">
          <div className="md:text-xl flex flex-col items-end text-sm">
            <p>Contact Us</p>
            <p className="font-bold">robosubucr@gmail.com</p>
          </div>
          <div className="text-2xl md:text-5xl border-l-black border-l-2 pl-6 ml-7 mb-5 md:mb-0 flex flex-col items-end">
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
    </div>
  );
};

export default Footer;
