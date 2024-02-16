import Image from "next/image";
import image2 from "@/public/blue-wave.svg";
import image1 from "@/public/sponsor.webp";
const PageTitle = () => {
  return (
    <div>
      <div className="w-full relative -z-10 -mb-14">
        <Image src={image1} alt="Background image 1" className="w-screen" />
        <Image
          src={image2}
          alt="Background image 2"
          className="w-screen top-[42%] absolute"
        />
      </div>
      <div className="flex flex-col left-[9%] absolute md:top-[35%] top-[8%] ">
        <p className="md:text-4xl 2xl:text-[40px] font-sans font-semibold text-robosub-yellow">
          Support Us
        </p>
        <p className="md:text-4xl 2xl:text-[50px] italic font-thin">
          Keep Our Aquatic Legacy Flowing!
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
