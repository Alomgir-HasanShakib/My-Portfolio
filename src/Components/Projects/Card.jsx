import { FaLink } from "react-icons/fa";


const Card = ({name, image, link}) => {
  return (
    <div  className="border border-cyan-700 p-10 shadow-lg hover:scale-105 rounded-md h-[320px] text-center">
      <div className="max-h-[500px] text-center flex justify-center ">
        <img className="h-[200px]" src={image} alt="" />
      </div>
      <a href={link} target="_blank" className="text-xl text-center text-cyan-700 font-medium mt-5 md:text-4xl flex items-center gap-2"> <FaLink className="text-xl"></FaLink>{name}</a>
    </div>
  );
};

export default Card;
