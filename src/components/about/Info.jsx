const format =
  "rounded-xl border-robosub-yellow border-[1px] flex flex-col items-center pt-2 pb-4 w-[30%] border-opacity-70 text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray";
const bigNumberFormat = "text-[80px] font-bold leading-none";

const Info = () => {
  return (
    <div className=" w-1/2">
      <div className="flex flex-col items-center mb-11">
        <p class="text-robosub-yellow font-bold text-base">Year founded</p>
        <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray text-[80px] leading-none">
          2015
        </p>
      </div>

      <div className="flex justify-between">
        <div className={format}>
          <p class={bigNumberFormat}>4</p>
          <p class="font-bold">Vehicles Designed</p>
        </div>

        <div className={format}>
          <p class={bigNumberFormat}>6</p>
          <p class="font-bold">Different Majors</p>
        </div>

        <div className={format}>
          <p class={bigNumberFormat}>4</p>
          <p class="font-bold text-center">Competitions Involved</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
