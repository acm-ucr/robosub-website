import Subtitle from "@/components/Subtitle";
import Board from "@/components/boards/Board";
import img1 from "../../public/cat.png";

const Boards = () => {
  return (
    <div className="mb-[30%] w-full flex flex-col items-center min-h-screen">
      <p>Boards</p>
      <Subtitle title="Current Team" text="Meet Our Executive Board" />
      <div className="w-[70%] grid grid-cols-4">
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
      <div className="w-[70%] grid grid-cols-4">
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
        <Board image={img1} name="Yi-Shiun Hung" role="Project Lead" />
      </div>
    </div>
  );
};

export default Boards;
