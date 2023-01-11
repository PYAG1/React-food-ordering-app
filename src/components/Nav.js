import React from 'react'
import {CiBurger} from 'react-icons/ci'
import CustomizedBadges from './shoppinglogo'

export default function Nav() {
  return (
    <div>
        <header className=' flex items-center justify-between w-full  h-[80px] bg-[#1f1f1f] p-2 rounded-b-[1em] '>
            <div className=' flex items-end '>
            <CiBurger size={30} className='text-[#ccff01] '/>
            <p className=' text-[white] text-xl'>MascotBites</p>

            </div>
            <div className=' mr-[1em]'>
            <CustomizedBadges/>
            </div>
        </header>

        
    </div>
  )
}