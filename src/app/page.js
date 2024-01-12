import HomeTitle from "@/components/home/HomeTitle";
import Support from "@/components/home/Support";
const Home = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <HomeTitle />
      <Support />
    </div>
  );
};

export default Home;
