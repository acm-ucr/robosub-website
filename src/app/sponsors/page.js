import Subtitle from "@/components/Subtitle";
import sponsors from "@/public/sponsors.webp";
import Image from "next/image";
import Link from "next/link";
import SponsorTitle from "@/components/sponsors/SponsorTitle";

const Sponsors = () => {
  return (
    <div className="mb-[25%] w-full flex flex-col items-center min-h-screen">
      <SponsorTitle />
      <div className="2xl:w-1/2 w-[75%] mb-10 text-center text-2xl font-light">
        <p>
          Through financial funding support, the Leviathan team will be able to
          build an graduate
        </p>
        autonomous submarine to compete in the annual Naval Information Warfare
        Center’s
        <p>
          RoboSub competition at no cost to students. This entirely student-run
          project will
        </p>
        <p>
          provide members with vital real-world engineering skills to prepare
          them for post-
        </p>
        <p>
          success. Most importantly, through sponsorships, we will be able to
          maintain
        </p>
        <p>
          our tradition as the first underwater-vehicle project at UCR for the
          future generations.
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
        className="text-robosub-yellow underline mt-2 text-2xl"
      >
        robosubucr@gmail.com
      </Link>
      <Subtitle
        title="Sponsors"
        text="A HUGE Thanks to Our Current Sponsors!"
      />
      <Image className="2xl:w-2/3 w-[75%]" src={sponsors} alt="Sponsors" />
    </div>
  );
};

export default Sponsors;
