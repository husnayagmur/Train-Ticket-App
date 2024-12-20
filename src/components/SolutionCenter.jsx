import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
import '../index.css';
import { IoMdQrScanner } from "react-icons/io";
import { TbExclamationCircle } from "react-icons/tb";
const SolutionCenter = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    };
    return (
        <div className="bg-gradient-to-b from-steelblue to-white min-h-screen py-10 px-6">
            {/* Header */}
            <div className="bg-white rounded-md flex flex-row items-center py-3 px-5 shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
                <GoChevronLeft
                    size={40}
                    onClick={handleBackClick}
                    className="cursor-pointer hover:scale-110 transition-all duration-300"
                />
                <p className="text-3xl text-center flex-1 font-archivo text-black">Solution Center</p>
            </div>

            {/* Description */}
            <div className="flex justify-center items-center mt-10">
                <IoMdQrScanner size={30} className="mr-2" />
                <p className="text-center text-2xl text-gray-800 font-semibold">
                    You can view your registered requests or create a new request
                </p>
            </div>

            {/* My Applications Section */}
            <div className="flex justify-center items-center mt-10">
                <div className="bg-white rounded-lg w-full max-w-md shadow-md p-3 text-center">
                    <TbExclamationCircle className="text-red mx-auto" size={50} />
                    <h1 className="font-bold text-xl text-gray-800 mt-4">
                        My Applications
                    </h1>
                    <p className="text-md text-gray-500 mt-2">
                        No registered requests.
                    </p>
                </div>
            </div>


            {/* Button Section */}
            <div className="flex flex-col justify-center items-center mt-10 space-y-6">
                {/* Create New Request Button */}
                <div className="w-full max-w-md">
                    <button className="border-2 border-white bg-steelblue text-white py-4 px-12 rounded-lg text-2xl w-full hover:bg-white hover:text-steelblue transition-all duration-300">
                        Create New Request
                    </button>
                </div>

                {/* Request Inquiry Button */}
                <div className="w-full max-w-md">
                    <button className="border-2 border-steelblue bg-white text-steelblue py-4 px-12 rounded-lg text-2xl w-full hover:bg-steelblue hover:text-white transition-all duration-300">
                        Request Inquiry
                    </button>
                </div>
            </div>




        </div>
    )
}

export default SolutionCenter;
