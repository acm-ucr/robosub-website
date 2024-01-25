import PageTitle from "@/components/PageTitle";
import vehicle from "../../public/vehicle.png";
import Leviathan from "@/components/vehicle/Leviathan";

const Vehicles = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <PageTitle image={vehicle} title="Vehicles" text="See Our AUV" />
      <Leviathan />
    </div>
  );
};

export default Vehicles;
