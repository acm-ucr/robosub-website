const Subtitle = ({ title, text }) => {
  return (
    <div className="">
      <p className="text-robosub-yellow font-bold text-3xl "> {title} </p>
      <p className="italic font-thin text-sm"> {text} </p>
    </div>
  );
};

export default Subtitle;
