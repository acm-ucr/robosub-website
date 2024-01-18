import Image from "next/image";
import image1 from "../../public/about.png";
import image2 from "../../public/yellow-wave.svg";
const paragraphGen = "";

const AboutTitle = () => {
  return (
    <div className="w-full relative -translate-y-5 -z-10">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-1/2 absolute"
      />
      <div className="w-full left-[17%] bottom-[40%] absolute flex flex-col items-start text-xl">
        <p className="text-4xl font-bold mb-5">What is RoboSub?</p>
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
