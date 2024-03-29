import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import JoinIcons from "@/components/home/JoinIcons";
import imagebar from "@/public/imageBar.webp";
import InfoBox from "@/components/home/InfoBox";
import JoinTeams from "@/components/home/JoinTeams";

const Home = () => {
  return (
    <div className="md:mb-[30%] mb-[40%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <InfoBox />
      <Subtitle title="Join the Experience" text="Open to all UCR students!" />
      <JoinTeams />
      <Image src={imagebar} alt="image bar" className="w-full" />
      <Subtitle title="Links" text="Get Involved" />
      <JoinIcons />
      <Support />
    </div>
  );
};

export default Home;
