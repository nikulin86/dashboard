import React from 'react';
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiUserCheck } from 'react-icons/bi';

function NavBar() {
  return (
    <div className="flex justify-between text-white">
      <div className="flex items-center gap-[0.8vw]">
      <BiUserCheck color="white" fontSize="2.5em"/>
  
        <div className="">
          <h4 className="">Ivanov Ivan</h4>
          <h6 className="text-yellow-500">online</h6>
        </div>
      </div>
      <div className="">
        <button className="rounded-[2vw] p-[2vh_5vw] flex gap-[1vw] items-center text-white border-2 border-white  cursor-pointer font-black transition ease-in-out delay-350 bg-cyan-600  hover:bg-indigo-500 hover:text-black duration-1000">
          <VscArrowSwap />
          Quick Transation
        </button>
      </div>
      <div className="flex items-center gap-[1.4vw]">
        <IoMdNotificationsOutline />
        <FiMail />
          <input className="h-[5vh] w-[15vw] p-[1vw] border-none  focus:outline-none  rounded-[2vw] " type="text" placeholder='Search' />
          <FaSearch />
        </div>
    </div>
  )
}

export default NavBar