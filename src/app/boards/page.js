import Subtitle from "@/components/Subtitle";
import Board from "@/components/boards/Board";
import PageTitle from "@/components/PageTitle";
import board from "@/public/board.png";
import Button from "@/components/Button";
import { boards } from "@/data/boards";
import { alumni } from "@/data/alumni";

const Boards = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <PageTitle image={board} title="Board" text="Meet the Team" />
      <div className="w-2/3 flex justify-end -mt-[10%] mb-4">
        <Button
          text="APPLY"
          link="https://discord.com/invite/gjFMdGwqUw"
          target="_blank"
        />
      </div>
      <Subtitle title="Current Team" text="Meet Our Executive Board" />
      <div className="pt-5 md:pt-0 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
        {boards.map((item, index) => (
          <Board
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
      <Subtitle title="Alumni" text="Our Previous Leads" />
      <div className="pt-5 md:pt-0 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
        {alumni.map((item, index) => (
          <Board
            key={index}
            image={item.image}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Boards;
