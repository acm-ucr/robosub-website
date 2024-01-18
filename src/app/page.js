import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import JoinIcons from "@/components/home/JoinIcons";
import imagebar from "../public/imageBar.png";
import InfoBox from "@/components/home/InfoBox";
import JoinTeam from "@/components/home/JoinTeam";
import { GrApple } from "react-icons/gr";
import JoinTeams from "@/components/home/JoinTeams";

const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <JoinTeam title="test" text="test" icon={<GrApple />} />
      <JoinTeams />
      <HomeTitle />
      <InfoBox />
      <Subtitle title="Join the Experience" text="Open to all UCR students!" />
      <Image src={imagebar} alt="image bar" />
      <Subtitle title="Links" text="Get Involved" />
      <JoinIcons />
      <Support />
    </div>
  );
};

export default Home;
