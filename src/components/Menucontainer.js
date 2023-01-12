import React from 'react'
import { Button } from '@mui/material'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'
import fooddata from '../fooddata'
import Extrainfo from './extrainfo'
import { useSelector } from 'react-redux'



export default function Menucontainer() {
    const cartList = useSelector((state)=> state.cart.itemList)
    const data = cartList.map((item)=>{
        return <Extrainfo key={item.id} {...item}/>
    })
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
        <div className=' w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
        <div className=' w-full p-1 px-2 rounded-lg flex items-center gap-2'>
       <img src={`../images/pizza1.jpg`} className='w-[80px] h-[80px] object-cover rounded-[20px]'/>
       <div className=' flex flex-col gap-2'>
        <p className=' text-base text-[white]'>
            Burger
        </p>

                

    </div>
    <div className=' w-full flex-1 bg-[#353535] rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
      <div className='w-full flex items-center justify-between'>
      
        <p className=' text-lg'>Subtotal</p>
        <p className=' text-lg'>Ghc 300.00</p>

        

      </div>
      <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Delivery</p>
      <p className=' text-lg'>Ghc 300.00</p>

      

    </div>

    <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Total</p>
      <p className=' text-lg'>Ghc 300.00</p>

    </div>

    <div className=' w-full border-b border-white my-2'></div>


    </div>


        </div>

    </div>
        
        
        

    
  )
}
