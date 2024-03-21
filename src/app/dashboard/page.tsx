import BoxIcon from '@/Components/BoxIcon'
import React from 'react'
import { LuCrown } from "react-icons/lu";

function Index() {
  return (
    <>
        <div className='w-screen h-screen justify-center items-center bg-slate-200 p-44'>
        <BoxIcon icon={ <LuCrown color='white' size={20} />} />
        
        </div>
        
    </>
  )
}

export default Index
