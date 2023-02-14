import React from 'react';
import {CiBurger} from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Propcomponent(props) {
  const move = useNavigate();
  return (
    <div className=' borderz w-full h-[70px]  flex justify-evenly items-center '>
        <div className='mr-3 w-[40px] h-[40px] bg-gray-200 rounded-full flex items-center justify-center'>
            <CiBurger size={35}/>
            </div> 
            <div>
          <Link to={`/history/${props.name}`} className=' font-semibold text-lg'>    {props.name}</Link>

          <div className=' w-[160px] flex gap-2 text-sm'>
          <p>{props.currentdate}</p>
          <p>{props.currenttime}</p>
          </div>

          



            </div>

            <div className=' font-bold font-[Oswald]'>
             <p>Ghc {props.total}.00</p> 
            </div>

    </div>
  )
}
