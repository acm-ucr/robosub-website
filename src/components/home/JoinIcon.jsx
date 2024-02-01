import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className={
        " text-5xl md:text-6xl md:py-0 py-2 flex flex-col text-white items-center font-bold duration-300 hover:text-robosub-yellow"
      }
      target="_blank"
    >
      {icon}
      <p className={"font-sans !text-base md:!text-lg mt-2"}>{text}</p>
    </Link>
  );
};

export default JoinIcon;
