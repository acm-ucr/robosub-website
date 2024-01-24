import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import JoinIcons from "@/components/home/JoinIcons";
import imagebar from "../public/imageBar.png";
import InfoBox from "@/components/home/InfoBox";
import JoinTeams from "@/components/home/JoinTeams";
import Questions from "@/components/join/Questions";
import Quotes from "@/components/join/Quotes";
const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <InfoBox />
      <Subtitle title="Join the Experience" text="Open to all UCR students!" />
      <JoinTeams />
      <Image src={imagebar} alt="image bar" />
      <Subtitle title="Links" text="Get Involved" />
      <JoinIcons />
      <Support />
      <Questions />
      <Quotes />
    </div>
  );
};

export default Home;
