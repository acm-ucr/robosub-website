import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import imagebar from "../public/imageBar.png";
const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <Subtitle title="Join the Experience" text="Open to all UCR students!" />
      <Image src={imagebar} alt="image bar" />
      <Subtitle title="Links" text="Get Involved" />
      <Support />
    </div>
  );
};

export default Home;
