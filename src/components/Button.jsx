import Link from "next/link";

const Button = ({ link, text }) => {
  return (
    <Link
      className=" w-fit border-robosub-light-gray border-[1px] rounded-lg font-light text-robosub-light-gray transition-opacity ease-in-out hover:opacity-60 active:opacity-40 py-1 px-7   "
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
