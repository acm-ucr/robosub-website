import Image from "next/image";
import image2 from "@/public/blue-wave.svg";
import vehicle from "@/public/vehicle.webp";

const VehicleTitle = () => {
  return (
    <div>
      <div className="w-full relative -z-10 -mb-10">
        <Image src={vehicle} alt="Background image 1" className="w-screen" />
        <Image
          src={image2}
          alt="Background image 2"
          className="w-screen top-[43%] absolute"
        />
      </div>
      <div className="flex flex-col left-[15%] absolute top-[20%] text-5xl font-sans font-bold">
        <p className="text-robosub-yellow">Vehicle</p>
        <p>See Our AUV</p>
      </div>
    </div>
  );
};

export default VehicleTitle;
