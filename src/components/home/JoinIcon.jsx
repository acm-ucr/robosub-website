import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className={
        "text-5xl md:text-6xl 2xl:text-[80px] py-2 flex flex-col items-center font-bold text-white duration-300 hover:text-robosub-yellow"
      }
      target="_blank"
    >
      {icon}
      <p className={"font-sans text-base md:text-lg 2xl:text-2xl mt-2"}>
        {text}
      </p>
    </Link>
  );
};

export default JoinIcon;
