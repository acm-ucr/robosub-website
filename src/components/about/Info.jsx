const format =
  "h-24 md:h-auto flex flex-col items-center pt-1 pb-2 md:pb-4 w-full text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray";
const bigNumberFormat = "md:text-8xl text-5xl font-bold leading-none";
const borderformat =
  "rounded-xl bg-gradient-to-b from-robosub-orange via-robosub-light-yellow to-robosub-orange p-[1px] md:w-30 w-[32%]";

const Info = () => {
  return (
    <div className="md:w-1/2 w-[80%]">
      <div className="flex flex-col items-center mb-9 md:mb-11">
        <p class="text-robosub-yellow font-bold text-sm md:text-base">
          Year founded
        </p>
        <p class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-robosub-dark-gray text-5xl md:text-[80px] leading-none">
          2015
        </p>
      </div>

      <div className="flex justify-between">
        <div className={borderformat}>
          <div className=" bg-robosub-black w-full rounded-xl">
            <div className={format}>
              <p class={bigNumberFormat}>4</p>
              <p class="font-bold text-center text-xs md:text-base">
                Vehicles Designed
              </p>
            </div>
          </div>
        </div>
        <div className={borderformat}>
          <div className=" bg-robosub-black w-full rounded-xl">
            <div className={format}>
              <p class={bigNumberFormat}>6</p>
              <p class="font-bold text-center text-xs md:text-base w-11/12 md:w-full">
                Different Majors
              </p>
            </div>
          </div>
        </div>
        <div className={borderformat}>
          <div className=" bg-robosub-black w-full rounded-xl">
            <div className={format}>
              <p class={bigNumberFormat}>4</p>
              <p class="font-bold text-center text-xs md:text-base">
                Competitions Involved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
