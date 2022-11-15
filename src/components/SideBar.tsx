import React from 'react';
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { AiFillSetting, AiFillAppstore } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { linksData } from '../data/Data';
import { ILinksData } from "../Types"




function SideBar() {



  return (
    <div className="bg-sky-600 text-white">
      <div className="flex justify-center items-center bg-sky-700 h-[10%]">
        <h2 className="text-red-500">
          Dashboard
        </h2>
      </div>
      <ul className="">
        {linksData.map((link) => {
          return (
            <li className=" list-none m-[0_auto] mt-[2rem] w-3/5 flex text-white  first:text-red-500">
              <a className="flex gap-[0.7rem] items-center transition ease-in-out   hover:text-red-500 duration-2000 " href="#">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar