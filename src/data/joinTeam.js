import { TbChartHistogram } from "react-icons/tb";
import { BsMotherboard } from "react-icons/bs";
import { TbHeartRateMonitor } from "react-icons/tb";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export const joinTeam = [
  {
    icon: <BsMotherboard />,
    title: "Electrical",
    text: "Network with potential sponsors, recruit new members, and build the foundation for the team.",
    animation: "",
  },
  {
    icon: <HiOutlineWrenchScrewdriver />,
    title: "Mechanical",
    text: "Design, fabricate, and test the vehicle, including frames, subsystems, and other robotic components.",
    animation: "animate-delay-200",
  },
  {
    icon: <TbHeartRateMonitor />,
    title: "Software",
    text: "Contribute to the development of our software stack and make impactful decisions.",
    animation: "animate-delay-[450ms]",
  },
  {
    icon: <TbChartHistogram />,
    title: "Business & Analytics",
    text: "Network with potential sponsors, recruit new members, and build the foundation for the team.",
    animation: "animate-delay-[650ms]",
  },
];
