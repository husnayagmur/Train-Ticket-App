import React from 'react';
import { GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaTicketSimple } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const MyTickets = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-steelblue to-white min-h-screen py-10 px-6">

      {/* Header*/}
      <div className="bg-steelblue rounded-md flex flex-row items-center py-3 px-5 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
        <GoChevronLeft size={40} onClick={handleBackClick} className="cursor-pointer hover:scale-110 transition-all duration-300" />
        <p className="text-3xl text-center flex-1 font-archivo text-white">Select Your Tickets</p>
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="text-center text-lg text-gray-800 font-semibold">
          ! You can view your journeys and perform ticket-related transactions.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col justify-center items-center space-y-4 border-2 mt-10 border-gray-600 p-6 shadow-lg rounded-lg bg-white max-w-3xl mx-auto">
        <div className="flex items-start space-x-2 mb-4">
          <IoIosSearch size={30} className="text-black" />
          <p className="text-lg font-bold text-gray-800">Search ticket with PNR no</p>
        </div>

        <div className="space-y-3 w-full max-w-md">
          {/* PNR No Input */}
          <div className="relative">
            <FaTicketSimple size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steelblue" />
            <input
              type="text"
              placeholder="PNR No"
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"
            />
          </div>

          {/* Last Name Input */}
          <div className="relative">
            <FaUser size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steelblue" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full pl-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900  transition-all"
            />
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-6">
            <button className="border-2 border-blue-950 text-black py-3 px-8 text-xl rounded-3xl w-full max-w-md hover:bg-aliceblue focus:outline-none focus:ring-2 focus:ring-aliceblue transition-all">
              SEARCH TICKETS
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-softRed border-2 border-red rounded-lg p-6 flex items-center justify-center space-x-3 shadow-lg">
        <GoDotFill size={30} className="text-red" />
        <p className="text-md text-center text-black py-6 px-8">
          You can travel with valid identity cards without printing your tickets.
        </p>
      </div>

    </div>
  );
};

export default MyTickets;
