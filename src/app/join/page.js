import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";
import PageTitle from "@/components/PageTitle";
import image1 from "../../public/sponsor.png";
import Questions from "@/components/join/Questions";
import Quotes from "@/components/join/Quotes";

const Join = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen mb-[20%]">
      <p>Join</p>
      <PageTitle _image={image1} title="Join" text="Get Involved" />
      <p className="text-robosub-light-blue text-3xl font-semibold text-center mt-10">
        We are Currently Recuiting ALL
      </p>
      <p className="text-robosub-light-blue text-3xl font-semibold text-center mb-10">
        Subteams!
      </p>
      <Button
        text="Join Discord"
        link="https://discord.com/invite/gjFMdGwqUw"
      />
      <Subtitle
        title="Frequently Asked Questions"
        text="Get to Know More About US"
      />
      <Questions />
      <Subtitle
        title="Quote Wall"
        text="Her About Our Team From a Few Members Themselves"
      />
      <Quotes />
    </div>
  );
};

export default Join;
