import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import fooddata from '../fooddata.js'
import {FaClock,FaFire,FaStar} from 'react-icons/fa'
import { Button } from '@mui/material'
import { UseLog } from '../utility.js'
import { FaArrowLeft} from 'react-icons/fa'



export default function Fooddetail() {
    const {userId} = useParams()



    const [view, setview]= useState(false);


    
  const {container,user } = UseLog()


  const newcontainer =container.filter((item)=>{
   return user === item.username
  }) ;

  const dynamiccontainer = newcontainer.filter((item)=>{
    return userId === item.name;
  })

  console.log(dynamiccontainer)

  const data = dynamiccontainer[0]


  const move = useNavigate()


  return (


<div>
<div className='   w-full text-white  h-full bg-[#1f1f1f] p-3 rounded-b-[1em] '>
      <button className=' mb-7' onClick={()=>move('/main')}>

        <FaArrowLeft size={28} className=''/>
      </button>
      <p className='font-[Oswald] text-3xl pl-2 mb-4'>Your History</p>
      </div>

  <header className='p-4  '>
    <div>
    <p className='text-2xl font-semibold font-[Oswald]'>{userId}</p>
    <p className=' text-lg font-[Oswald]'>{data.currentdate}</p>
    </div>
   
  </header> 


<div className='px-4 flex flex-col justify-between w-full h-[80vh] '>
  <table className=" table-fixed justify-evenly w-full text-center gap-2">
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
      <td className='text-left'>{item.name}</td>
      <td>{item.quantity}</td>
      <td>Ghc {item.price}</td>
    </tr>
    
    <div className='  border-b border-white my-2 lg:my-1'></div>

  </tbody>)})}

  </table>

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











  <div className='p-4'>

  </div>
</div>




    
  )
}
