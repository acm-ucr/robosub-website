import Image from "next/image";
import image2 from "@/public/blue-wave.svg";
const PageTitle = ({ image, title, text }) => {
  return (
    <div className="w-full relative -z-10 -mb-10">
      <Image src={image} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[43%] absolute"
      />
      <div className="flex flex-col left-[15%] absolute top-[30%] md:top-[40%] 2xl:text-6xl md:text-5xl text-xl font-sans font-bold">
        <p className="text-robosub-yellow">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageTitle;
