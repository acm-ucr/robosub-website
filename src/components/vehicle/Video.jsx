const Video = ({ link, title }) => {
  return (
    <iframe
      className="aspect-video w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      src={link}
      title={title}
    />
  );
};

export default Video;
