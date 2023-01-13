import React from 'react'
import { Button } from '@mui/material'
import {BiMinus,BiPlus} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartslice'

export default function Extrainfo({id,name,quantity,total,price,img}) {


  const dispatch = useDispatch()

  const delet = () => {
    dispatch(cartActions.delete(id));
  };

  const addButton = ()=>{
    dispatch(
        cartActions.Add({
            id,name,price
        })
    )
  }

  

  return (
  
    <div className=' w-full p-1 px-2 rounded-lg flex items-center gap-2 scroll'>
    <img src={`../images/${img}`} className='w-[80px] h-[80px] object-cover rounded-[20px] scroll'/>
    <div className=' flex flex-col gap-2'>
     <p className=' text-base font-semibold text-[white]'>
         {name}
     </p>
     <p className='text-sm block text-white font-semibold'>
         Ghc {price}
     </p>
     </div>
     <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
         <button className=' border' onClick={addButton}>

            <BiPlus size={20} className=' text-gray-200'/> 

         </button>
         <p className='w-5 h-5 pl-1 rounded-sm flex text-white items-center'>{quantity}</p>
         <button className='border' onClick={delet}>
             <BiMinus size={20} className=' text-gray-200'/>
         </button>
     </div>
     </div>

    


    
  )
}
