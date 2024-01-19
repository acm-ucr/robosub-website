const Video = ({ link, title }) => {
  return <iframe className="aspect-video w-2/5" src={link} title={title} />;
};

export default Video;
