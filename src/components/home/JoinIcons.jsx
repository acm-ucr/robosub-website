import { links } from "@/data/links";
import JoinIcon from "./JoinIcon";
const JoinIcons = () => {
  return (
    <div className="md:flex md:w-[45%] md:justify-between my-6 md:my-10">
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
