import Link from "next/link";
const Button = ({ link, text }) => {
  return (
    <Link
      className="border-robosub-light-gray border-2 rounded-lg py-3 px-7"
      href={link}
      target="_blank"
    >
      {text}
    </Link>
  );
};

export default Button;
