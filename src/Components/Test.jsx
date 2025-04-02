import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import RightBar from "./RightBar";

const Test = () => (
  <div className="relative flex h-screen justify-between ">
    <SideBar />
    <div className="flex-1 ">
      <div className="flex-1 flex flex-col h-screen z-20 ">
        <Body />
      </div>
    </div>

    <div className="fixed right-0 h-screen">
      <RightBar />
    </div>
  </div>
);

export default Test;
