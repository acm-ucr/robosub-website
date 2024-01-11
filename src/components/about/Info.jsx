const format =
  "rounded-xl border-robosub-yellow border-[1px] flex flex-col items-center  w-[31%] py-2 pb-4 border-opacity-70 text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray";
const bigNumberFormat = "text-[90px] font-bold leading-none";

const Info = () => {
  return (
    <div className=" w-1/2">
      <div className="flex flex-col items-center mb-1">
        <p class="text-robosub-yellow font-bold text-base">Year founded</p>
        <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray text-[90px] leading-none">
          2015
        </p>
      </div>

      <div className="flex justify-between">
        <div className={format}>
          <p class={bigNumberFormat}>4</p>
          <p class="font-bold text-lg">Vehicles Designed</p>
        </div>

        <div className={format}>
          <p class={bigNumberFormat}>6</p>
          <p class="font-bold text-lg">Different Majors</p>
        </div>

        <div className={format}>
          <p class={bigNumberFormat}>4</p>
          <p class="font-bold text-lg text-center">Competitions Involved</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
