import React from 'react';
import '../index.css';
import { AiOutlineHome } from "react-icons/ai";
import { LuTicketSlash } from "react-icons/lu";
import { AiOutlineSolution } from "react-icons/ai";
import { FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen relative">

      <div className="bg-highSpeedTrain h-[calc(80vh-70px)] sm:h-screen bg-cover bg-center relative">
        <button className="py-3 px-10 rounded-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white bg-darkOrange shadow-[0_4px_6px_rgba(0,0,0,0.5)] absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:scale-110 transition-all duration-300">
          <Link to="/my-tickets" className='font-archivo'>BUY TICKET</Link>
        </button>
      </div>

      {/* Navbar */}
      <footer className="bg-lightGrey bg-opacity-70 py-4 fixed bottom-0 left-0 right-0 shadow-lg">
        <nav>
          <ul className="flex justify-center space-x-6 sm:space-x-10 items-center">
            
            <li className="flex flex-col items-center space-y-2 group">
              <AiOutlineHome size={30} className="group-hover:text-gray-700 sm:text-4xl" />
              <Link to="/" className="text-black group-hover:text-gray-700 text-base sm:text-xl font-archivo">Home Page</Link>
            </li>

            <li className="flex flex-col items-center space-y-2 group">
              <LuTicketSlash size={30} className="group-hover:text-gray-700 sm:text-4xl" />
              <Link to="/my-tickets" className="text-black group-hover:text-gray-700 text-base sm:text-xl font-archivo">My Tickets</Link>
            </li>

            <li className="flex flex-col items-center space-y-2 group">
              <AiOutlineSolution size={30} className="group-hover:text-gray-700 sm:text-4xl" />
              <Link to="/solution-center" className="text-black group-hover:text-gray-700 text-base sm:text-xl font-archivo">Solution Center</Link>
            </li>

            <li className="flex flex-col items-center space-y-2 group">
              <FaThLarge size={25} className="group-hover:text-gray-700 sm:text-4xl" />
              <Link to="/other" className="text-black group-hover:text-gray-700 text-base sm:text-xl font-archivo">Other</Link>
            </li>

          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default HomePage;
