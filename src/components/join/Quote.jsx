const Quote = ({ quote, person }) => {
  return (
    <div className="m-3 rounded-xl bg-gradient-to-b from-robosub-orange via-robosub-light-yellow to-robosub-orange p-[1px] h-fit">
      <div className="w-full py-2 px-5 bg-robosub-black rounded-xl">
        <p className="font-thin md:text-[16px] text-[14px]">
          {" "}
          &quot;{quote}&quot;
        </p>
        <p className="py-2 font-bold md:text-sm text-xs"> {person} </p>
      </div>
    </div>
  );
};

export default Quote;
