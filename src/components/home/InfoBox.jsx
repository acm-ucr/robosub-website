import Image from "next/image";
import image1 from "../../public/project.png";
import image2 from "../../public/vehicle1.png";
import Button from "../../components/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";
const format = "font-sans font-light text-[23px] md:text-[13px]";

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center w-[80%]">
      <div className="flex justify-between mb-[7%] md:flex-col">
        <div className="flex flex-col w-[55%] md:w-full mb-6">
          <div className="flex items-center mb-[12%] md:mb-6">
            <AiOutlineDoubleRight className=" text-robosub-blue text-4xl md:text-2xl" />
            <p className="font-bold text-[35px] md:text-xl ">Our Project</p>
          </div>
          <div className="mb-[10%] md:mb-6">
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
        <div className="object-contain w-[45%] md:w-full">
          <Image src={image1} alt="Project Image" />
        </div>
      </div>

      <div className="flex justify-between md:flex-col">
        <div className="object-contain w-[45%] md:w-full mb-6">
          <Image src={image2} alt="Vehicle Image" />
        </div>

        <div className="flex flex-col items-end w-[55%] md:w-full">
          <div className="flex items-center mb-[12%] md:mb-6">
            <AiOutlineDoubleRight className=" text-robosub-blue text-4xl md:text-2xl" />
            <p className="font-bold text-[35px] md:text-xl">Our Vehicle</p>
          </div>
          <div className="flex flex-col items-end mb-[10%] md:mb-6">
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
