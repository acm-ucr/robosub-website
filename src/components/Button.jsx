import Link from "next/link";

const Button = ({ link, text, target }) => {
  return (
    <Link
      className=" duration-300 w-fit border-robosub-light-gray border-[1px] rounded-lg font-light text-robosub-light-gray hover:opacity-60 active:opacity-40 py-1 px-7   "
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
