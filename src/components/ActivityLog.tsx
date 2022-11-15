import React from "react";
import { IActivityLog } from "../Types";
import { BsThreeDots } from "react-icons/bs";

interface ActivityLogProps {
  data: IActivityLog;
}

function ActivityLog(props: ActivityLogProps) {
  return (
    <>
      <div className="mt-[1rem]  flex gap-[1rem]  items-center">
        <div className="">
          <h5>{props.data.day}</h5>
          <h5>{props.data.date}</h5>
        </div>
        <div className="h-[0.6rem] w-[0.6rem] bg-red-500 rounded-full"></div>
        <div className="">
          <h5>{props.data.name}</h5>
          <h5>{props.data.status}</h5>
        </div>
      </div>
    </>
  );
}

export default ActivityLog;
