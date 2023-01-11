import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import fooddata from '../fooddata.js'
import {FaClock,FaFire,FaStar} from 'react-icons/fa'
import { Button } from '@mui/material'


export default function Fooddetail() {
    const {userId} = useParams()

const data= fooddata[userId-1];
    const [view, setview]= useState(false);





  return (
    <div className=' w-full h-screen flex flex-col justify-between lg:p-10'>

<div className='lg:flex'>
<div className=' border w-full overflow-hidden lg:w-[50%] lg:h-full h-[200px] rounded-b-[30px] lg:rounded-b-[0px] '>
    
<img src={`../images/${data.img}`} className=" w-full h-full object-cover" alt={data.name}/>


</div>
        <div className=' p-3 lg:w-[50%] '>

            <p className=' text-4xl'>{data.name}</p>

            <div className=' flex w-full justify-between pt-[1em] '>
                <div className=' flex items-center'>
            <FaClock/>
            <p className=' text-lg'>{data.delivery} min</p>
            </div>

            <div className=' flex items-center'>
            <FaFire/>
            <p className=' text-lg'>30 calories</p>
            </div>

            <div className=' flex items-center'>
            <FaStar/>
            <p className=' text-lg'>5</p>
            </div>
            



            </div>

            
        <div className='text-lg p-[1.5em] text-justify '> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol gravida neque convallis. ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis. Commodo quis imperdiet massa tincidunt nunc. Aliquet bibendum enim facilisis gravida neque convallis. Lectus proin nibh nisl condimentum id venenatis. Sit amet porttitor eget dolor morbi non.</p>
        </div>

        </div>
        </div>



        <div className=' flex justify-between items-center lg:hidden'>
            <p className=' text-3xl font-semibold'>Ghc{data.price} </p>

            <Button>
                ADD
            </Button>

        </div>

        </div>





    
  )
}
