const Quote = ({ quote, person }) => {
  return (
    <div className=" border-robosub-yellow bg-clip-text bg-gradient-to-tr from-robosub-yellow to-robosub-dark-gray rounded-xl items-center pt-2 pb-4 w-1/3 duration-200 border-[1px] border-opacity-70 font-light py-1 px-7 ">
      <p></p>
      <p className="font-thin"> {quote} </p>
      <p className="pt-1 font-bold text-sm"> {person} </p>
    </div>
  );
};

export default Quote;
