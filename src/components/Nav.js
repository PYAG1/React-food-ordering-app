import React from 'react'
import {CiBurger} from 'react-icons/ci'

export default function Nav() {
  return (
    <div>
        <header className=' flex items-center w-full  h-[70px] bg-[#1f1f1f] p-2 rounded-b-[1em] '>
            <div className=' flex items-end '>
            <CiBurger size={30} className='text-[#ccff01] '/>
            <p className=' text-[white] text-xl'>MascotBites</p>

            </div>
        </header>

        
    </div>
  )
}