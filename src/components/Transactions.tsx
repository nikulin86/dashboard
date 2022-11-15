import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { ITransaction } from "../Types";

interface TransactionsProps {
  data: ITransaction[];
}

function Transactions(props: TransactionsProps) {
  return (
    <div className="text-white w-full">
      <div className="flex justify-between items-center">
        <div className="">
          <h3>Transaction</h3>
        </div>
        <div className="flex items-center gap-[2rem]">
          <div className="flex gap-[1rem]">
            <h5>You Bought:</h5>
            <h4>$140,734.01</h4>
          </div>
          <div className="flex gap-[1rem]">
            <h5>You Sold:</h5>
            <h4>$347,735,011.14</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h4>Statistics</h4>
          <h4>Uo by 50%</h4>
        </div>
        <div className="flex gap-[1rem] mt-[15px]">
          <button className="rounded-[2rem] bg-white text-black p-[0.2rem_1rem] ">Year</button>
          <button className="rounded-[2rem] bg-red-500 text-white p-[0.2rem_1rem] ">Month</button>
        </div>
      </div>
      <div className="h-[10rem] w-full mt-[25px]">
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
    </div>
  );
}

export default Transactions;
