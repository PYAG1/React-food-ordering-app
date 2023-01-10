import React, { useEffect,useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import image1 from '../images/bgimg.jpg'
import {CiBurger} from 'react-icons/ci'
import { Button } from '@mui/material';

export default function Firstpage() {

  const [show,setshow]= useState(true);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setshow(false)
    }, 2000);
  },[])
  return (


    <div className=' bg-[#1f1f1f] w-full h-screen flex felx-col justify-center items-center p-[3em]'>


<div className={show ? 'border flex flex-col items-center h-[200px] justify-evenly':'border flex flex-col items-center h-[600px]  justify-evenly'}>


{show && (<div className='flex flex-col items-center text-[white] pt-3 '>
<CiBurger size={60} className='text-[#ccff01]'/>

<CircularProgress color='inherit' />
</div>)}


{
  !show && (
 
      <div className='text-[#ccff01] flex flex-col'>
        <p className=' text-2xl text-center text-[white] font-[Oswald]'>Tasty and Delicious Food just a tap away!</p>
        <Button variant="outlined" className='w-[100px]'  color="inherit">
          Order
        </Button>

      </div>
  )
}
</div>
    </div>
  )
}
