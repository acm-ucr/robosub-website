import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className={
        " text-7xl flex flex-col text-white items-center font-bold transition-all ease-in-out hover:text-robosub-yellow"
      }
      target="_blank"
    >
      {icon}
      <p className={"font-sans !text-2xl mt-2"}>{text}</p>
    </Link>
  );
};

export default JoinIcon;
