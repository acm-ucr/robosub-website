import Image from "next/image";
import image1 from "@/public/project.webp";
import image2 from "@/public/vehicle1.webp";
import Button from "../../components/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center w-[70%]">
      <div className="flex flex-col md:flex-row md:justify-between md:mb-[7%] mb-[50%] 2xl:w-[90%]">
        <div className="flex w-full mb-6 md:mb-0 md:w-[55%] flex-col ">
          <div className="flex items-center mb-6 md:mb-[12%]">
            <AiOutlineDoubleRight className=" text-robosub-blue text-2xl md:text-4xl 2xl:text-5xl" />
            <p className="font-bold text-xl md:text-[35px] 2xl:text-5xl ">
              Our Project
            </p>
          </div>
          <div className="mb-6 md:mb-[10%] ">
            <p className="font-sans font-light md:text-[23px] text-[13px] 2xl:text-3xl w-[95%]">
              We are University of California, Riverside&apos;s competitive
              autonomoous underwater vehicle project, competing internationally
              in Robonation&apos;s Robosub Competition.
            </p>
          </div>
          <Button link="/about" text="LEARN MORE" />
        </div>
        <div className="object-contain w-full md:w-[45%]   ">
          <Image src={image1} alt="Project Image" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between 2xl:w-[90%]">
        <div className="object-contain w-full mb-6 md:w-[45%]">
          <Image src={image2} alt="Vehicle Image" />
        </div>

        <div className="flex flex-col items-end w-full md:w-[55%]">
          <div className="flex items-center mb-6 md:mb-[12%]">
            <AiOutlineDoubleRight className=" text-robosub-blue text-2xl md:text-4xl 2xl:text-5xl" />
            <p className="font-bold text-xl md:text-[35px] 2xl:text-5xl">
              Our Vehicle
            </p>
          </div>
          <div className="flex flex-col items-end mb-6 md:mb-[10%] 2xl:text-4xl">
            <p className="font-sans font-light md:text-[23px] text-[13px] 2xl:text-3xl w-[95%] text-end">
              Leviathan features five degrees of motion, and is designed for
              control efficiency and stability. We are currently in the
              construction phase of the project and are excited to show our
              results.
            </p>
          </div>
          <Button link="/vehicles" text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
