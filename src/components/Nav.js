import React from 'react'
import {CiBurger} from 'react-icons/ci'
import CustomizedBadges from './shoppinglogo'
import { cartActions } from '../store/cartslice';
import { useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { UseLog } from '../utility';
import SimplePopper from './pop';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  
const dispatch = useDispatch();

const open= ()=>{
dispatch(cartActions.togglestae())
}

const {user} = UseLog()

const truthcheck = user === ''

const move = useNavigate()

const {logout} = UseLog()
  
  return (
    <div >
        <header className=' fixed top-0  flex items-center justify-between w-full  h-[80px] bg-[#1f1f1f] p-2 rounded-b-[1em] '>
          { !truthcheck && (<div>
            <SimplePopper/>

            

            </div>)}
            <div className=' flex items-end cursor-pointer  ' onClick={()=>{
              move('/')
              logout()
          }}>
            <CiBurger size={30} className='text-[#ccff01] '/>
            <p className=' text-[white] text-xl'>MascotBites</p>

            </div>
            <div className=' mr-[1em]'>
              <button onClick={open}>
            <CustomizedBadges/>
            </button>
            </div>
        </header>

        
    </div>
  )
}