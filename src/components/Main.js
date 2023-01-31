import React, { useState } from 'react'
import Nav from './Nav'
import fooddata from '../fooddata.js'
import Food from './foodcomp'
import { ShowChart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cartslice';
import Menucontainer from './Menucontainer';
import SimpleSnackbar from './snackbar';
import { UseLog } from '../utility';
import {FaUserCircle} from 'react-icons/fa'

export default function Main() {

//for filtering food
  const [filter , setfilter] = useState()
console.log(fooddata);


const showCart = useSelector((state)=> state.cart.showCart)




  const foodD= fooddata.map((item,index)=>{
    return <Food key={index} id={item.id} delivery={item.delivery} name={item.name} price={item.price} img={item.img}/>
  })

  const {user} = UseLog();

  const date = new Date();
  const  actdate = `${date.getDay()}  ${ date.getUTCMonth() }  ${date.getFullYear()} `

  console.log(actdate)

  const truthcheck = user === ''

  console.log(user)

  return (
    <div>


      
      <div className='mb-[2em]'>
        <Nav/>
        </div>

     <Menucontainer/>

     <div className=' p-3 mt-[6em] w-full'>

     <div> 
    

      {!truthcheck && (<div className=' mb-[3em] flex items-center'>
        
          <p className=' text-2xl font-[Oswald] '>Welcome {user}</p></div>)
          }
      <p className=' text-2xl font-[Oswald]'>Our Menu</p>
      

    <div className=' w-[90px] border-b border-black my-2 lg:my-1'></div>
     </div>
     
<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 px-3 items-center'>
{foodD}




      </div>
      <SimpleSnackbar/>
    </div>
    </div>
  )
}
