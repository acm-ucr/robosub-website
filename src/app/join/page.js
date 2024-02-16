import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";
import PageTitle from "@/components/PageTitle";
import join from "@/public/join.webp";
import Questions from "@/components/join/Questions";
import Quotes from "@/components/join/Quotes";

const Join = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen mb-[20%]">
      <PageTitle image={join} title="Join" text="Get Involved" />
      <p className="text-robosub-light-blue text-lg md:text-4xl 2xl:text-5xl font-semibold text-center">
        We are Currently Recuiting for ALL
      </p>
      <p className="text-robosub-light-blue text-lg md:text-4xl 2xl:text-5xl font-semibold text-center mb-10 2xl:mb-16">
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
