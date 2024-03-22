import React from 'react';
import { FaBars } from "react-icons/fa";

type SetIsCollapsedFn = (isCollapsed: boolean) => void;

function Header({isCollapsed, setIsCollapsed}:{isCollapsed:Boolean, setIsCollapsed:SetIsCollapsedFn}) {
  return (
    <div className='w-full h-[60px] bg-white px-[20px] flex items-center justify-between'>
      <div className='flex gap-5 items-center'>
        <div onClick={()=>{setIsCollapsed(!isCollapsed)}} className=' hover:cursor-pointer'>
        <FaBars size={20} />
        </div>
            Logo
      </div>
      <div>
        confknkd
      </div>
    </div>
  )
}

export default Header
