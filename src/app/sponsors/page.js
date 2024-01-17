import Subtitle from "@/components/Subtitle";
import sponsors from "../../public/sponsors.png";
import Image from "next/image";
import Link from "next/link";
const Sponsors = () => {
  return (
    <div className="mb-[25%] w-full flex flex-col items-center min-h-screen">
      <div className="w-1/2 my-10 text-center">
        <p>
          Through financial funding support, the Leviathan team will be able to
          build an autonomous submarine to compete in the annual Naval
          Information Warfare Center’s RoboSub competition at no cost to
          students. This entirely student-run project will provide members with
          vital real-world engineering skills to prepare them for post-graduate
          success. Most importantly, through sponsorships, we will be able to
          maintain our tradition as the first underwater-vehicle project at UCR
          for the future generations.
        </p>
        <p className="mt-20 mb-5">
          Check out our current supporters and sponsors below!
        </p>
        <p>
          Any financial support is much appreciated. If would like to support
          our team through other means (mentorship, part support, etc.), please
          reach out to us at
        </p>
      </div>
      <Link
        href="robosubucr@gmail.com"
        className="text-robosub-yellow underline mt-2"
      >
        robosubucr@gmail.com
      </Link>
      <Subtitle
        title="Sponsors"
        text="A HUGE Thanks to Our Current Sponsors!"
      />
      <Image className="w-2/3" src={sponsors} alt="Sponsors" />
    </div>
  );
};

export default Sponsors;
