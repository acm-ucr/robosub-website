const Subtitle = ({ title, text }) => {
  return (
    <div className="w-full pl-[15%] mb-8 mt-20">
      <p className="text-robosub-yellow font-bold text-4xl "> {title} </p>
      <p className="italic font-thin"> {text} </p>
    </div>
  );
};

export default Subtitle;
