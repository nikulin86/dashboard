import React from "react";
// import logo from './logo.svg';
import "./App.css";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div className="h-screen w-full relative overflow-x-hidden">
      <div className="z-10 grid  grid-cols-[15%_85%]  h-screen relative ">
        <SideBar />
        <DashBoard />
      </div>
      <div className="absolute bg-green-600 h-[10rem] w-[10rem] left-[15rem] top-[2rem] transform rotate-45 "></div>
      <div className="absolute bg-yellow-700 h-[10rem] w-[10rem] left-[35rem] top-[15rem] rounded-full"></div>
      <div className="absolute bg-red-500 h-[10rem] w-[10rem] left-[60rem] top-[20rem] rounded-full"></div>
      <div className="absolute bg-green-600 h-[10rem] w-[10rem] left-[85rem] top-[7rem] transform rotate-45 "></div>
    </div>
  );
}

export default App;
