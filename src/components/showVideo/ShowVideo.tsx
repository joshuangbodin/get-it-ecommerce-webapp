import { Link } from "react-router-dom";
import "./ShowVideo.css";

interface Props {
  videoUrl: string;
  display1?: string;
  display2?: string;
  buttonText: string;
}

const ShowVideo = ({ videoUrl, display1, display2, buttonText }: Props) => {
  return (
    <div>
      <video
        className="videodisplay"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <div className="textshow">
        {display1 && <h3 className="display">{display1}</h3>}
        {display2&&<p className="display2">{display2}</p>}
        { buttonText&&<button className="gotoshop">
          <Link className="link" to="/store">{buttonText}</Link>
        </button>}
      </div>
    </div>
  );
};

export default ShowVideo;
