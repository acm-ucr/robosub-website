import Image from "next/image";

const Board = ({ image, name, role }) => {
  return (
    <div className="font-sans 2xl:w-60 w-44 flex flex-col items-center">
      <div
        className="bg-gradient-to-br from-robosub-blue via-robosub-blue to-robosub-light-blue 
                      rounded-full p-1 aspect-square w-full"
      >
        <Image
          className="rounded-full object-cover aspect-square w-full"
          src={image}
          alt="picture of member"
        />
      </div>
      <p className="text-robosub-yellow 2xl:text-3xl text-2xl font-bold text-center">
        {" "}
        {name}{" "}
      </p>
      <p className="text-robosub-light-gray font-semibold 2xl:text-lg text-sm">
        {role}
      </p>
    </div>
  );
};

export default Board;
