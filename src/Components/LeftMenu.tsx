"use client";
import BoxIcon from "@/Components/BoxIcon";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import classNames from "classnames";

function LeftMenu() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={classNames("hidden md:block bg-black w-[230px] h-screen pt-[30px] flex-col items-center relative", isCollapsed && "w-[70px]")}>
      <div className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center absolute top-[20px] -right-[10px] hover:cursor-pointer" onClick={() => {setIsCollapsed(!isCollapsed)}}>
       {isCollapsed ?  <FaAngleRight size={10}/>: <FaAngleLeft size={10}/>}
      </div>
      <div className="flex gap-4 justify-center items-center pt-[40px]">
        <BoxIcon
          icon={<LuCrown color="black" size={15} />}
          backgroundColor="WHITE"
        />
        {isCollapsed ? null : <h1 className="text-white text-sm">Home</h1>}
      </div>
    </div>
  );
}

export default LeftMenu;
