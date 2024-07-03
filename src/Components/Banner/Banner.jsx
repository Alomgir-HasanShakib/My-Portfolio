import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/profile.png";
import cv from "../../assets/cv.pdf";
import { IoMdDownload } from "react-icons/io";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <img className="rounded-xl" src={banner} alt="" />
    </div>
  );
};

export default Banner;
