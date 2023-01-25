import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function Newpage() {
  return (
    <div className=' md:flex md:items-center md:justify-center w-full h-screen bg-[#ccff01] text-[white]'>
    <div className='flex flex-col justify-center px-[2em] h-screen md:w-[410px] '>
        <div className=' border border-solid border-red-800 h-[420px] bg-[#1c1e20]'>
        <div className=' flex justify-between px-5 pt-3'>
                <NavLink to='signup' className=' text-2xl md:text-2xl pb-6'>Sign up</NavLink>
                <NavLink to='signin' className=' text-2xl md:text-2xl pb-6'>Sign in</NavLink>

                </div>
                <Outlet/>
          
        </div>

    </div>
    </div>
  )
}
