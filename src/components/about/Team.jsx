const Team = ({ icon, title, text, list }) => {
  return (
    <div className="w-9/12 md:w-7/12 flex flex-col justify-items-start font-sans text-robosub-light-gray space-y-2 md:space-y-4">
      <div className="text-5xl md:text-6xl font-bold bg-clip-text">
        <svg width="0" height="0">
          <linearGradient
            id="gray-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#505050" offset="0%" />
            <stop stopColor="#FFFFFF" offset="100%" />
          </linearGradient>
        </svg>
        {icon}
      </div>
      <p className="text-2xl md:text-3xl text-robosub-yellow font-semibold">
        {title}
      </p>
      <p className="leading-5 font-light">{text}</p>
      <div className="font-semibold tracking-tight">
        {list.map((item, index) => (
          <div className="flex items-center text-sm" key={index}>
            <div className="ml-3 w-1 h-1 mr-1 rounded-full bg-white" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
