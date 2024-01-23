import Image from "next/image";
import image1 from "../../public/about.png";
import image2 from "../../public/yellow-wave.svg";
const paragraphGen = "";

const AboutTitle = () => {
  return (
    <div className="w-full relative translate-y-0 md:-translate-y-5 -z-10">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[60%] absolute"
      />
      <div className="w-full leading-tight md:leading-7 left-[7%] md:left-[10%] bottom-[30%] md:bottom-[30%] absolute flex flex-col items-start text-[8px] md:text-xl">
        <p className="text-xl md:text-4xl font-bold mb-2 md:mb-5">
          What is RoboSub?
        </p>
        <p className={paragraphGen}>
          UCR RoboSub is one of IEEE&apos;s large-scale
        </p>
        <p className={paragraphGen}>
          projects that consists of multidisciplinary
        </p>
        <p className={paragraphGen}>teams work year-long to collaboratively</p>
        <p className={paragraphGen}>create an autonomous submarine from</p>
        <p className={paragraphGen}>
          scratch used to compete in the international
        </p>
        <p className={paragraphGen}>RoboSub competition.</p>
      </div>
    </div>
  );
};

export default AboutTitle;
