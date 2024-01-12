import HomeTitle from "@/components/home/HomeTitle";
import InfoBox from "@/components/home/InfoBox";
const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <InfoBox />
    </div>
  );
};

export default Home;
