import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { UseLog } from '../utility.js'
import {CiBurger} from 'react-icons/ci'
import { FaArrowLeft,FaUserCircle} from 'react-icons/fa'



export default function Fooddetail() {
    const {userId} = useParams()



    


    
  const {container,user } = UseLog()


  const newcontainer =container.filter((item)=>{
   return user === item.username
  }) ;

  const dynamiccontainer = newcontainer.filter((item)=>{
    return userId === item.name;
  })



  const data = dynamiccontainer[0]


  const move = useNavigate()


  return (


<div className='w-full h-full' >
<div className='   w-full text-white  h-full bg-[#1f1f1f] p-3 rounded-b-[1em] '>
      <button className=' mb-7' onClick={()=>move('/history')}>

        <FaArrowLeft size={28} className=''/>
      </button>
      <p className='font-[Oswald] text-3xl pl-2 mb-4'>Your History</p>
      </div>

<div className=' flex flex-col gap-6'>
  <header className='p-4 flex justify-between items-center  w-full   '>
    <div>
    <p className='text-2xl font-semibold font-[Oswald]'>{userId}</p>
    <p className=' text-lg font-[Oswald]'>{data.currentdate}</p>
    </div>

    <FaUserCircle size={40} className='bg-[#ccff01] rounded-[9em]'/>
   
  </header> 

<p className=' font-[Oswald] font-semibold text-2xl pl-4'>You Ordered:</p>


<div className='px-4 flex flex-col justify-between w-full h-[60vh] '>
  <div className=' justify-center flex flex-col items-center'>
  <table className="  table-fixed  w-full text-center gap-2">
  <thead>
    <tr className='font-[Oswald] font-semibold'>
      <th>Item</th>
      <th>Quantity</th>
      <th>price</th>
    </tr>
    </thead>
    { data.items.map((item)=>{
    return (<tbody>
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>Ghc {item.price}</td>
    </tr>
    
    <div className='  border-b border-white my-2 lg:my-1'></div>

  </tbody>)})}

  </table>
  </div>

<div>
  <p className=' pb-3 text-3xl font-[Oswald] '>Payment</p>
    <div>
    <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Total</p>
      <p className=' text-lg font-[Oswald] font-semibold'>Ghc {data.total} .00</p>

      

    </div>


    </div>
    </div>
  </div>
  </div>











  <div className='w-full h-[13vh] mt-[4em] md:h-[15vh] flex flex-col items-center justify-center bg-[#1f1f1f] '>
 
  <div className=' flex  justify-center items-center'>
    <CiBurger size={30} className='text-[#ccff01]' />
    <p className='text-[#ccff01] text-lg md:text-2xl'>MascotBites</p>
  
  </div>


  </div>
</div>




    
  )
}
