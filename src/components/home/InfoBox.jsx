import Image from "next/image";
import image1 from "../../public/project.png";
import image2 from "../../public/vehicle1.png";
import Button from "../../components/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";
const format = "font-sans font-light md:text-[23px] text-[13px]";

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center w-[70%]">
      <div className="flex flex-col md:flex-row md:justify-between mb-[7%]">
        <div className="flex w-full mb-6 md:mb-0 md:w-[55%] flex-col ">
          <div className="flex items-center mb-6 md:mb-[12%]">
            <AiOutlineDoubleRight className=" text-robosub-blue text-2xl md:text-4xl" />
            <p className="font-bold text-xl md:text-[35px]">Our Project</p>
          </div>
          <div className="mb-6 md:mb-[10%]">
            <p className={format}>
              We are University of California, Riverside&apos;s
            </p>
            <p className={format}>competitive autonomoous underwater vehicle</p>
            <p className={format}>
              project, competing internationally in Robonation&apos;s
            </p>
            <p className={format}>Robosub Competition.</p>
          </div>
          <Button link="/about" text="LEARN MORE" />
        </div>
        <div className="object-contain w-full md:w-[45%]">
          <Image src={image1} alt="Project Image" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="object-contain w-full mb-6 md:w-[45%]">
          <Image src={image2} alt="Vehicle Image" />
        </div>

        <div className="flex flex-col items-end w-full md:w-[55%]">
          <div className="flex items-center mb-6 md:mb-[12%]">
            <AiOutlineDoubleRight className=" text-robosub-blue text-2xl md:text-4xl" />
            <p className="font-bold text-xl md:text-[35px]">Our Vehicle</p>
          </div>
          <div className="flex flex-col items-end mb-6 md:mb-[10%]">
            <p className={format}>
              Leviathan features five degrees of motion, and is
            </p>
            <p className={format}>
              designed for control efficiency and stability. We
            </p>
            <p className={format}>
              are currently in the construction phase of the
            </p>
            <p className={format}>
              project and are excited to show our results.
            </p>
          </div>
          <Button link="/vehicles" text="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
