const Team = ({ icon, title, text, list }) => {
  return (
    <div className="w-7/12 flex flex-col justify-items-start font-sans text-robosub-light-gray space-y-2">
      <div className=" text-[80px] font-bold bg-clip-text">{icon}</div>
      <p className="text-4xl text-robosub-yellow font-semibold">{title}</p>
      <p className="text-lg leading-relaxed">{text}</p>
      <div className="font-semibold tracking-tight">
        {list.map((item, index) => (
          <div className="flex items-center" key={index}>
            <div className="ml-3 w-1 h-1 mr-1 rounded-full bg-white" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
