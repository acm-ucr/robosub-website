import { links } from "@/data/links";
import JoinIcon from "./JoinIcon";
const JoinIcons = () => {
  return (
    <div className="flex w-[45%] justify-between my-10">
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
