import Subtitle from "@/components/Subtitle";
import Board from "@/components/boards/Board";
import img1 from "../../public/cat.png";
import PageTitle from "@/components/PageTitle";
import board from "../../public/board.png";
import Button from "@/components/Button";
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
      <div className="grid grid-cols-4 gap-10">
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
      </div>
      <Subtitle title="Alumni" text="Our Previous Leads" />
      <div className="grid grid-cols-4 gap-10">
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
      </div>
    </div>
  );
};

export default Boards;
