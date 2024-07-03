import { FaLink } from "react-icons/fa";

const Card = ({ name,description, image, liveLink, serverRepoLink, clientRepoLink,technology }) => {
  return (
    <div className=" card border-2 border-b-teal-500 border-t-teal-300 border-l-teal-300 border-r-indigo-500 max-w-[450px] shadow-md hover:border-l-indigo-500 hover:border-t-teal-500 hover:border-b-teal-300 hover:border-r-indigo-300 transition duration-300 ease-in-out hover:shadow-indigo-400">
      <figure className="p-2">
        <img className="rounded-lg" src={image} alt="Project Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-teal-100">{name}</h2>
        <p>{description}</p>
        <p className="capitalize text-teal-700 font-bold">technology used: <span className="text-teal-200 italic font-light">{technology}</span></p>
        <div className="card-actions">
          <button className="btn bg-teal-600 text-white">
            <a
              href={liveLink}
              target="_blank"
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
              </svg>
              Live Link
            </a>
          </button>
          <button className="btn bg-teal-600 text-white">
            <a href={serverRepoLink}
              target="_blank" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
              Server Repo Link
            </a>
          </button>
          <button className="btn w-full bg-teal-600 text-white">
            <a href={clientRepoLink}
              target="_blank" className="flex items-center gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
              Client Repo link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
