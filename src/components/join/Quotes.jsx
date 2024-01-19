import { quotes, quotes2 } from "@/data/quotes";
import Quote from "./Quote";
const Quotes = () => {
  return (
    <div className="grid grid-cols-2 mt-[3%] w-2/3">
      <div>
        {quotes.map((item, index) => (
          <Quote
            className=""
            key={index}
            quote={item.quote}
            person={item.person}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
