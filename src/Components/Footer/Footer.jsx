import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        
        <p>Copyright © 2024 - All right reserved By ALOMGIR HASAN SHAKIB</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
        <a href="https://github.com/Alomgir-HasanShakib">
          <FaGithub></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/ahshakib2">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://www.facebook.com/ahshakib2005">
          <FaFacebook></FaFacebook>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
