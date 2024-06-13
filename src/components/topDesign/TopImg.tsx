

import "./TopVideo.css"
interface Props {
  videoUrl?: string;
  display?: string;
}

const TopVideo = ({ videoUrl , display}: Props) => {
  return (
    <div className=" w-full  flex justify-center">
      <img
        className="w-full md:w-5/6 object-cover h-[50vh]  md:rounded-xl"
        src={videoUrl}
        alt=""
      />
      <h3 className="display1">{display}</h3>
      </div>
  
  );
};

export default TopVideo;
