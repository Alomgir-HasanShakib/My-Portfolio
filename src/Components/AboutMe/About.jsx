import { FaArrowRight, FaDownload } from "react-icons/fa";
import cv from "../../assets/cv.pdf";

const About = () => {
  return (
    <div
      className="flex justify-between gap-5 flex-col md:flex-row mt-24 mb-24 items-center"
      id="about"
    >
      <div className="w-[50%]">
        <img src="https://i.postimg.cc/3wnbv3b7/About-Me.png" alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl md:text-4xl font-bold text-slate-50 mb-8">
          A Bit About Me.
        </h3>
        <p className="text-xl font-semibold">
          Hello! I’m Alomgir Hasan Shakib, a highly skilled{" "}
          <span className="text-teal-400 font-extrabold">
            Front End web developer
          </span>{" "}
          with a comprehensive expertise in front-end technologies. My technical
          proficiency includes{" "}
          <span className="italic">
            HTML, CSS, Tailwind CSS, JavaScript, ReactJS, Firebase
            Authentication, and a bit about MongoDB, Express.js, Node.js,
            Next.js.
          </span>
        </p>
        <table className="mt-16">
          <tbody>
            <tr className="text-xl">
              <td className="pb-5 text-gray-500 font-bold">
                Name: Alomgir Hasan Shakib
              </td>
            </tr>
            <tr>
              <td className="pb-5 text-xl text-gray-500 font-bold">
                Age: Currently I'm 17 Years Old
              </td>
            </tr>
            <tr>
              <td className="pb-5 text-xl text-gray-500 font-bold">
                Education: Current I'm a Student of Class 12
              </td>
            </tr>
            <tr>
              <td className="pb-5 text-xl text-gray-500 font-bold">
                Language: Bengali, English, Hindi
              </td>
            </tr>
          </tbody>
        </table>
        <button className="ml-2 px-3 py-1 md:px-4 md:py-2  text-teal-100 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-full border-none transition duration-1000 ease-in-out">
          <a
            href={cv}
            className="
          flex items-center gap-2"
          >
            Download CV<FaDownload></FaDownload>
          </a>
        </button>
        <button className="ml-2 px-3 py-1 md:px-4 md:py-2  text-teal-100 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-full border-none transition duration-1000 ease-in-out">
          <a
            href="https://github.com/Alomgir-HasanShakib"
            target="_blank"
            className="flex items-center gap-2"
          >
            GitHub <FaArrowRight></FaArrowRight>
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
