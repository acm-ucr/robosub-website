import Button from "../Button";
const Support = () => {
  return (
    <div className=" flex flex-col items-center w-full mt-28">
      <p className=" text-4xl mb-2  text-white font-semibold">
        SUPPORT UCR ROBOSUB!
      </p>
      <p className="text-xl">
        WE RELY ON YOUR HELP TO KEEP OUR TEAM RUNNING AND FREE FOR
      </p>
      <p className=" mb-4">ALL UCR STUDENTS</p>

      <Button text="SUPPORT US" link="/sponsors" />
    </div>
  );
};
export default Support;
