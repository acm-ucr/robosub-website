import Image from "next/image";
import image1 from "../../public/project.png";
import image2 from "../../public/vehicle1.png";
import Button from "../../components/Button";
import { AiOutlineDoubleRight } from "react-icons/ai";

const InfoBox = () => {
  return (
    <div className="flex flex-col items-center w-[100%]">
      <div className="flex justify-between mb-[7%]">
        <div className="flex flex-col w-[55%]">
          <div className="flex items-center mb-[12%]">
            <AiOutlineDoubleRight />
            <p className="font-bold text-[35px]">Our Project</p>
          </div>
          <div className="mb-[15%]">
            <p className="font-sans font-light text-[23px]">
              We are University of California, Riverside&apos;s
            </p>
            <p className="font-sans font-light text-[23px]">
              competitive autonomoous underwater vehicle
            </p>
            <p className="font-sans font-light text-[23px]">
              project, competing internationally in Robonation&apos;s
            </p>
            <p className="font-sans font-light text-[23px]">
              Robosub Competition.
            </p>
          </div>
          <Button link="/about" text="LEARN MORE" />
        </div>
        <div className="object-contain w-[45%]">
          <Image src={image1} alt="Project Image" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="object-contain w-[45%]">
          <Image src={image2} alt="Vehicle Image" />
        </div>

        <div className="flex flex-col items-end w-[55%]">
          <div className="flex items-center mb-[12%]">
            <AiOutlineDoubleRight />
            <p className="font-bold text-[35px]">Our Vehicle</p>
          </div>
          <div className="flex flex-col items-end mb-[15%]">
            <p className="font-sans font-light text-[23px]">
              Leviathan features five degrees of motion, and is
            </p>
            <p className="font-sans font-light text-[23px]">
              designed for control efficiency and stability. We
            </p>
            <p className="font-sans font-light text-[23px]">
              are currently in the construction phase of the
            </p>
            <p className="font-sans font-light text-[23px]">
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
