import logo from "../public/team-logo.png";
import img1 from "../public/footer-blue-wave.svg";
import Link from "next/link";
import Image from "next/image";
import { links } from "../data/footerLinks";

const Footer = () => {
  return (
    <div>
      <div className="w-full relative">
        <Image
          alt="img1"
          src={img1}
          className="w-full"
        />
      </div>
      <div className="w-full bg-white h-96">
        <div className="absolute flex flex-col-2 ml-14 mt-40 ">
          <Image
            alt="logo"
            src={logo}
            className="h-max hover:opacity-75 duration-300"
          />
          <div>
            <p className="font-sans font-medium text-robosub-dark-gray text-3xl ">
              ROBOSUB
            </p>
            <p className="font-sans text-robosub-dark-gray text-3xl">UCR</p>
          </div>
        </div>
        <div className="flex justify-center items-center translate-y-40 text-robosub-black text-xl">
          <div>
            <p className="font-bold">University of California, Riverside</p>
            <p className="font-bold">Autonomous Underwater Vechicle</p>
            <p>Winston Chung Hall, Riverside, CA</p>
          </div>
        </div>
        <div className="flex justify-end items-center text-robosub-black">
          <div className="font-sans text-xl flex flex-col items-end">
            <p>Contact Us</p>
            <p className="font-bold">robosubucr@gmail.com</p>
          </div>
          <div className="text-6xl border-l-black border-l-2 pl-6 ml-7 m-10">
            {links.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className="hover:text-robosub-yellow duration-300"
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
