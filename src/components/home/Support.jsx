import Button from "../Button";
const Support = () => {
  return (
    <div className=" flex flex-col items-center w-full mt-28">
      <p className=" text-2xl md:text-4xl 2xl:text-5xl mb-4 2xl:mb-6 text-center text-white font-semibold">
        SUPPORT UCR ROBOSUB!
      </p>
      <p className="max-w-[90%] text-center text-sm md:text-xl 2xl:text-2xl mb-2 2xl:mb-4">
        WE RELY ON YOUR HELP TO KEEP OUR TEAM RUNNING AND FREE FOR
      </p>
      <p className="text-sm md:text-xl 2xl:text-2xl mb-4 2xl:mb-6">
        ALL UCR STUDENTS
      </p>

      <Button text="SUPPORT US" link="/sponsors" />
    </div>
  );
};
export default Support;
