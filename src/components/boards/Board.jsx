import Image from "next/image";
import img1 from "../../public/cat.png";

const Board = ({ image, name, role }) => {
  return (
    <div className="font-sans font-bold text-base md:text-lg px-3 my-2">
      <div className="flex w-full justify-between my-10">
        <Image
          className="
          border-4
          rounded-full  
          my-4
          object-cover
          aspect-square"
          class="bg-gradient-to-r from-robosub-blue to-robosub-light-blue 
        rounded-full p-1 max-w-xl"
          src={img1}
          alt="picture of member"
        />
      </div>
      <p
        className="text-robosub-yellow bg-robosub-dark-gray text-center
      p-2 whitespace-nowrap"
      >
        {role}
      </p>
      <p
        className="text-robosub-light-gray bg-robosub-dark-gray 
      text-center w-[100%] p-2"
      >
        {name}
      </p>
    </div>
  );
};

export default Board;
