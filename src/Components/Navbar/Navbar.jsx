import cv from "../../assets/cv.pdf";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#14b8a6"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
              <a href="">Home</a>
            </li>
            <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
              <a href="">skill</a>
            </li>
            <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
              <a href="">Projects</a>
            </li>
            <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
              <a href="">contact</a>
            </li>
            <li className="text-teal-100 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-full border-none transition duration-300 ease-in">
              <a download={cv}>Download cv</a>
            </li>
          </ul>
        </div>
        <a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-2xl md:text-4xl font-semibold uppercase ">
          Shakib
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal uppercase text-xl text-teal-400 ">
          <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
            <a href="">Home</a>
          </li>
          <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
            <a href="">skill</a>
          </li>
          <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none ">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-teal-200 cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-none">
            <a href="">contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="ml-2 px-3 py-1 md:px-4 md:py-2  text-teal-100 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-700 rounded-full border-none transition duration-1000 ease-in-out">
          <a href={cv}>Download CV</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
