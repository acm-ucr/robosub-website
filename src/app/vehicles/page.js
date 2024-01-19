import PageTitle from "@/components/PageTitle";
import image1 from "../../public/sponsor.png";
import Leviathan from "@/components/vehicle/Leviathan";

const Vehicles = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <PageTitle _image={image1} title="Vehicles" text="See Our AUV" />
      <p>Vehicles</p>

      <Leviathan />
    </div>
  );
};

export default Vehicles;
