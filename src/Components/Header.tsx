import React from 'react';
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className='w-full h-[60px] bg-white px-[20px] flex items-center justify-between'>
      <div className='flex gap-5 items-center'>
        <span>
        <FaBars size={20}/>
        </span>
            Logo
      </div>
      <div>
        confknkd
      </div>
    </div>
  )
}

export default Header
