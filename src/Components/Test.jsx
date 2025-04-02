import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import RightBar from "./RightBar";
import Casino from "./Casino";
import Cricket from "./Cricket";

const Test = () => (
  <div className="relative flex h-screen justify-between ">
    <SideBar />
    <div className="flex-1 ">
      <div className="flex-1 flex flex-col h-screen z-20 ">
       <Cricket/>
      </div>
    </div>
    <div className="fixed right-0 h-screen">
      <RightBar />
    </div>
  </div>
);

export default Test;
