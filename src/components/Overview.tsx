import React from "react";
import { IOverview } from "../Types";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

interface OverviewProps {
  data: IOverview[];
}

function Overview(props: OverviewProps) {
  return (
    <div className="h-[50%] w-full text-white">
      <div className="flex justify-between ">
        <h3>Overview</h3>
        <div className="flex justify-between mb-[1rem] gap-[0.5rem]">
          <button className="rounded-[2rem] p-[0.2rem_1rem] cursor-pointer bg-white text-black">
            Month
          </button>
          <button className="rounded-[2rem] p-[0.2rem_1rem] bg-red-500 text-white cursor-pointer">
            Year
          </button>
        </div>
      </div>

      <div className="mb-[1rem] flex flex-col gap-[0.4rem]">
        <div className="flex gap-[1rem] items-center">
          <div className="">
            <h4>Total Balance</h4>
          </div>
          <div className="flex gap-[0.2rem]">
            <h4>USD</h4>
            <h3>17.3m</h3>
          </div>
        </div>
        <div className="flex gap-[1rem] items-center">
          <div className="">
            <h4>Revenue</h4>
          </div>
          <div className="flex gap-[0.2rem]">
            <h4>USD</h4>
            <h3>14K</h3>
          </div>
        </div>
      </div>
      <div className="h-[30%]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={props.data}
            margin={{ top: 10 }}
          >
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#ff4d6d" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#ff4d6d11" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data2"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
            <Area
              type="monotone"
              dataKey="data1"
              stroke="#ee3b3b"
              fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-[4rem] m-[1rem_0]">
        <div className="">
          <h4>Invoices</h4>
          <div>
            <h3>34</h3>
            <h4>Unpaid</h4>
          </div>
        </div>
        <div className="">
          <h4>Transactions</h4>
          <div>
            <h3>737</h3>
            <h4>Completed</h4>
          </div>
        </div>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <button className="p-[0.8rem_4rem] rounded-[2rem] cursor-pointer bg-[#ff4d6d] text-white ">Expand Chart</button>
      </div>
    </div>
  );
}

export default Overview;
