


interface Props {
  videoUrl: string;
  
}

const TopVideo = ({ videoUrl }: Props) => {
  return (
    <div className=" w-full  flex justify-center ">
      <video
        className="w-full md:w-5/6 object-cover h-[50vh]  md:rounded-xl"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      
      </div>
  
  );
};

export default TopVideo;
