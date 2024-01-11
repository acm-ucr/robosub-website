import Link from "next/link";

const Button = ({ link, text }) => {
  return (
    <Link
      className=" w-fit border-robosub-light-gray border-[1px] rounded-lg py-2 px-8 font-light text-robosub-light-gray transition-opacity ease-in-out hover:opacity-60 active:opacity-40"
      href={link}
    >
      {text}
    </Link>
  );
};

export default Button;
