import Image from "next/image";
import image2 from "../public/blue-wave.svg";

const PageTitle = (props) => {
  return (
    <div className="">
      <div className="w-full relative -translate-y-5 -z-10">
        <Image
          src={props._image}
          alt="Background image 1"
          className="w-screen"
        />
        <Image
          src={image2}
          alt="Background image 2"
          className="w-screen top-[43%] absolute"
        />
      </div>
      <div className="flex flex-col left-[9%] absolute top-[17%] ">
        <p className="text-[60px] font-sans font-semibold  text-robosub-yellow -mb-5">
          {props.title}
        </p>
        <p className="text-[70px] font-sans font-bold">{props.text}</p>
      </div>
    </div>
  );
};

export default PageTitle;
