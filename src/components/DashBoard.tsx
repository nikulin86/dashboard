import React from "react";
import NavBar from "./NavBar";
import Wallets from "./Wallets";
import Expense from "./Expense";
import { dataExpense } from "../data/Data";
import { BsThreeDots } from "react-icons/bs";
import Transactions from "./Transactions";
import { dataTransaction } from "../data/Data";
import { dataOverview } from "../data/Data";
import { dataActivityLog } from "../data/Data";
import Overview from "./Overview";
import ActivityLog from "./ActivityLog";

function DashBoard() {
  return (
    <div className="w-full h-full bg-[#0b2061] bg-opacity-90 backdrop-blur p-[2rem_1rem]">
      {" "}
      <NavBar />
      <div className="grid  grid-cols-[70%_25%] gap-[2rem] mt-[2rem]">
        <div className="w-full z-20 flex gap-[3rem] flex-col">
          <Wallets />
          <div className="flex flex-col text-white">
            <div
              className="flex 
            items-center justify-between"
            >
              <h4>Expenses</h4>
              <BsThreeDots />
            </div>
            <div className="">
              <Expense/>
            </div>
          </div>
          <Transactions data={dataTransaction} />
        </div>
        <div className="">
          <Overview data={dataOverview} />
          <div className="text-white mt-[40px]">
            <div className="flex justify-between">
              <h4>Activity Info</h4>
              <BsThreeDots />
            </div>
            {dataActivityLog.map((data) => {
              return <ActivityLog data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
