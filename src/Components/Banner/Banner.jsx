import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/profile.png";
import cv from "../../assets/cv.pdf";
import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-16 items-center px-3">
      <div className="md:w-2/4 space-y-4">
        <h2 className="text-[#E3FEF7] text-[28px] md:text-5xl font-bold">
          Alomgir Hasan SHAKIB
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-cyan-700">
          <Typewriter
            words={["Web Designer", "Web developer"]}
            loop={999999}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <p className="text-slate-500 text-xl font-bold">
          I will be your Creative Front-End Developer
        </p>
        <button className="btn bg-cyan-700 text-white font-medium">
          <a href={cv} download className="flex gap-2 text-xl items-center">
            Download CV <IoMdDownload className="text-xl" />
          </a>
        </button>
      </div>
      <div className="">
        <img className="" src={profile} alt="logo" />
      </div>
    </div>
  );
};

export default Banner;
