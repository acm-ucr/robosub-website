const Quote = ({ quote, person }) => {
  return (
    <div className="m-3 rounded-xl bg-gradient-to-b from-robosub-orange via-robosub-light-yellow to-robosub-orange p-[1px] 2xl:p-[2px] h-fit">
      <div className="w-full 2xl:py-4 2xl:px-8 py-2 px-5 bg-robosub-black rounded-xl">
        <p className="font-thin md:text-base text-xs 2xl:text-xl 2xl:tracking-wide 2xl:leading-normal">
          {" "}
          &quot;{quote}&quot;
        </p>
        <p className="py-2 font-bold md:text-sm text-[10px] 2xl:text-lg">
          {" "}
          {person}{" "}
        </p>
      </div>
    </div>
  );
};

export default Quote;
