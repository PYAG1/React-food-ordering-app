import React from 'react'
import { Button } from '@mui/material'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'

export default function Menucontainer() {
  return (
    <div className='fixed top-0 right-0 w-full md:w-[375px] z-[101] drop-shadwo-md h-screen bg-white flex flex-col'>
        <div className='w-full flex items-center justify-between p-4'>
        <button >
            <FaArrowLeft  size={30}/>
        </button>

        <p className=' text-lg font-semibold'>Cart</p>


        <Button>
            <p>Clear</p>
        </Button>


        </div>

    {/*Bottom section*/ }
    <div className=' w-full h-full bg-[#1f1f1f] rounded-t-[2rem] flex flex-col'>

    </div>
        
        
        </div>

    
  )
}
