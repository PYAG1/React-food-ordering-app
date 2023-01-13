import React, { useState } from 'react'
import Nav from './Nav'
import fooddata from '../fooddata.js'
import Food from './foodcomp'
import { ShowChart } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartslice';
import Menucontainer from './Menucontainer';

export default function Main() {

//for filtering food
  const [filter , setfilter] = useState()
console.log(fooddata);




  const foodD= fooddata.map((item,index)=>{
    return <Food key={index} id={item.id} name={item.name} price={item.price} img={item.img}/>
  })

  return (
    <div>


      
      <div className='mb-[2em]'>
        <Nav/>
        </div>

     <Menucontainer/>

     <div className=' p-3 mt-[6em] w-full'>
      <p className=' text-2xl'>Our Menu</p>
     </div>
     
<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-3 items-center'>
{foodD}




      </div>
    </div>
  )
}
