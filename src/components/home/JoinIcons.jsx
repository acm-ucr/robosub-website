"use client";
import { links } from "@/data/links";
import JoinIcon from "./JoinIcon";
import useView from "../useView";
const JoinIcons = () => {
  const [inView, ref] = useView();
  return (
    <div
      ref={ref}
      className={`md:flex md:w-[45%] md:justify-between mt-6 md:my-10 ${
        inView &&
        "animate-flip-down animate-delay-400 animate-once animate-ease-linear"
      } `}
    >
      {links.map((item, index) => (
        <JoinIcon
          key={index}
          text={item.text}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default JoinIcons;
