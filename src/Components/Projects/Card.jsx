import { FaLink } from "react-icons/fa";

const Card = ({ name, image, link }) => {
  return (
    <div className="mb-16 mt-16 card border-2 border-b-teal-500 border-t-teal-300 border-l-teal-300 border-r-indigo-500 max-w-[450px] shadow-md shadow-teal-200">
      <figure>
        <img
          src="https://i.postimg.cc/7hjD4Hnq/Untitled-design-1.png"
          alt="Project Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Eventer</h2>
        <p>A Event Management Website</p>
        <div className="card-actions">
          <button className="btn bg-teal-600 text-white"><a href="">Live Link</a></button>
          <button className="btn bg-teal-600 text-white"><a href="">Server Repo Link</a></button>
          <button className="btn w-full bg-teal-600 text-white"><a href="">Client Repo link</a></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
