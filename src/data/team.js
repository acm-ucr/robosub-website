import { FaGear } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";
import { MdMonitor } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

export const team = [
  {
    icon: <FaGear />,
    title: "Mechanical-Systems Engineering",
    text: "The Mechanical team creates the physical structure of the submarine, working with top-down design patterns to create the submarine from conception to completion. Subgroups for components give leadership and small-group experience for members. We use Solidworks to create our models and manufacturing drawings.",
    list: [
      "PCB Board assembly and design",
      "Circuitry",
      "Motor controllers programming",
      "Micro-controller design",
    ],
  },
  {
    icon: <FaMicrochip />,
    title: "Electrical",
    text: "The Electrical team creates and organizes the electrical subsystems and sensors within the submarine, designing circuitry, creating PCBs, and networking components. We use Altium Designer to create our PCB diagrams.",
    list: [
      "SolidWorks",
      "ANSYS/FEA",
      "Experience with systems such as buoyancy & propulsion mechanisms",
      "3D printing, machining, laser cutting and other fabrication methods",
    ],
  },
  {
    icon: <MdMonitor />,
    title: "Software",
    text: "The Software team gives the submarine life, creating the artificial intelligence, computer vision, and software interface modules that allow the robot to see, sense, and move. We use Robot Operating System (ROS), Python, and C/C++ for our controls.",
    list: [
      "Robotics coding using C++ and Python",
      "Simulation with Gazebo and ROS",
      "Computer Vision with ROS",
      "GUI design",
    ],
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Business & Sponsorships Lead-Systems Engineering",
    text: "The Business & Sponsorships team manages the project from a high level: contacting companies for sponsorships, maintaining social media accounts, managing project organization and water tests, and assisting the other teams with outreach and contact.",
    list: [
      "Financial Management",
      "Microsoft Office",
      "Website development",
      "Outreach to sponsors and new members",
      "Managing the team's requirements for competition",
    ],
  },
];
