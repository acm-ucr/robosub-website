import { videos } from "@/data/videos";
import Video from "./Video";
const Videos = () => {
  return (
    <div className=" w-3/4 md:w-1/2 gap-14 md:gap-20 grid grid-cols-1">
      {videos.map((video, index) => (
        <Video key={index} title={video.title} link={video.link} />
      ))}
    </div>
  );
};

export default Videos;
