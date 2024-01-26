import { joinTeam } from "@/data/joinTeam";
import JoinTeam from "./JoinTeam";

const JoinTeams = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[15%]">
      {joinTeam.map((item, index) => (
        <JoinTeam
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default JoinTeams;
