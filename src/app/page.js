import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import JoinIcons from "@/components/home/JoinIcons";
import imagebar from "../public/imageBar.png";
import InfoBox from "@/components/home/InfoBox";
import JoinTeam from "@/components/home/JoinTeam";
import { BsBank } from "react-icons/bs";

const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <InfoBox />
      <Subtitle title="Join the Experience" text="Open to all UCR students!" />
      <JoinTeam
        title="Busniess & Analytics"
        text="Network with potential sponsors, recruit new members, and build the foundation for the team."
        icon={<BsBank />}
      />
      <Image src={imagebar} alt="image bar" />
      <Subtitle title="Links" text="Get Involved" />
      <JoinIcons />
      <Support />
    </div>
  );
};

export default Home;
