import PageTitle from "@/components/PageTitle";
import vehicle from "@/public/vehicle.webp";
import Leviathan from "@/components/vehicle/Leviathan";
import Videos from "@/components/vehicle/Videos";

const Vehicles = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <PageTitle image={vehicle} title="Vehicles" text="See Our AUV" />
      <Leviathan />
      <Videos />
    </div>
  );
};

export default Vehicles;
