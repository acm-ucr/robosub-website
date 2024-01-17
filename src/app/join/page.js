import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";

const Join = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <p>Join</p>
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
      <Subtitle
        title="Quote Wall"
        text="Her About Our Team From a Few Members Themselves"
      />
    </div>
  );
};

export default Join;
