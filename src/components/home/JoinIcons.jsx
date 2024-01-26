import { links } from "@/data/links";
import JoinIcon from "./JoinIcon";
const JoinIcons = () => {
  return (
    <div className="md:flex md:w-[45%] justify-between my-8 md:pe-[0%] pe-[60%]  ">
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
