import { quotes, quotes2 } from "@/data/quotes";
import Quote from "./Quote";
const Quotes = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 mt-[3%] md:p-0 p-11 md:w-2/3 w-max-full">
      <div>
        {quotes.map((item, index) => (
          <Quote
            className=""
            key={index}
            quote={item.quote}
            person={item.person}
            animation={item.animation}
          />
        ))}
      </div>
      <div>
        {quotes2.map((item, index) => (
          <Quote
            className=""
            key={index}
            quote={item.quote}
            person={item.person}
            animation={item.animation}
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
