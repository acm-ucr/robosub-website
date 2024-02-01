import Image from "next/image";
import image1 from "../../public/about.png";
import image2 from "../../public/yellow-wave.svg";

const AboutTitle = () => {
  return (
    <div className="w-screen relative translate-y-0 md:-translate-y-5 -z-10">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[60%] absolute"
      />
      <div className="w-fit leading-tight md:leading-7 left-[10%] bottom-[30%] absolute flex flex-col items-start text-[6px] 2xl:text-3xl md:text-xl">
        <p className="text-lg 2xl:text-5xl md:text-4xl font-bold mb-2 2xl:mb-8 md:mb-5">
          What is RoboSub?
        </p>
        <p>UCR RoboSub is one of IEEE&apos;s large-scale</p>
        <p>projects that consists of multidisciplinary</p>
        <p>teams work year-long to collaboratively</p>
        <p>create an autonomous submarine from</p>
        <p>scratch used to compete in the international</p>
        <p>RoboSub competition.</p>
      </div>
    </div>
  );
};

export default AboutTitle;
