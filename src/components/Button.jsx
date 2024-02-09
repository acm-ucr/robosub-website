import Link from "next/link";

const Button = ({ link, text, target }) => {
  return (
    <Link
      className=" text-sm 2xl:text-2xl md:text-base duration-300 w-fit border-robosub-light-gray border-[1px] rounded-lg font-light text-robosub-light-gray hover:opacity-60 active:opacity-40 py-0.5 md:py-1 2xl:py-2 2xl:px-9 px-5 md:px-7   "
      href={link}
      target={target}
    >
      {text}
    </Link>
  );
};

export default Button;
