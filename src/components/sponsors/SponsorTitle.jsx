import Image from "next/image";
import image2 from "../../public/blue-wave.svg";
import image1 from "../../public/sponsor.png";
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
      <div className="flex flex-col left-[9%] absolute top-[9%] ">
        <p className="text-4xl font-sans font-semibold text-robosub-yellow">
          Support Us
        </p>
        <p className="text-4xl italic font-thin">
          Keep Our Aquatic Legacy Flowing!
        </p>
      </div>
    </div>
  );
};

export default PageTitle;
