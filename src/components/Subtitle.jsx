const Subtitle = ({ title, text }) => {
  return (
    <div className="w-full pl-[15%] md:mb-8 mt-24">
      <p className="text-robosub-yellow font-bold text-2xl md:text-4xl 2xl:text-5xl">
        {" "}
        {title}{" "}
      </p>
      <p className="italic font-thin text-xs md:text-base 2xl:text-xl">
        {" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default Subtitle;
