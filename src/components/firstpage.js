import React, { useEffect,useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import image1 from '../components/save.jpg'
import {CiBurger} from 'react-icons/ci'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Firstpage() {

  const [show,setshow]= useState(true);



  const move= useNavigate()
//for loader
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setshow(false)
    }, 2000);
  },[])
  return (


    <div className=' bg-[#1f1f1f] w-full h-screen flex felx-col justify-center items-center p-[3em]'>
      


<div className={show ? ' flex flex-col items-center h-[200px] justify-evenly':''}>


{show && (<div className='flex flex-col items-center text-[white] pt-3 '>
<CiBurger className='text-[#ccff01] text-5xl md-text-9xl'/>

<CircularProgress color='inherit' />
</div>)}


{
  !show && (
 <div className='scale-in-bottom flex flex-col justify-evenly h-[600px] items-center md:gap-[2em] md:h-[570px] gap-[2em]'>
  <div className=' flex flex-col justify-center items-center'>
    <CiBurger size={30} className='text-[#ccff01]' />
    <p className='text-[#ccff01]'>MascotBites</p>
  </div>

<div className='w-[300px] h-[300px] rounded-full overflow-hidden '>
<img src={image1}  className='w-[300px] h-[300px]  object-cover
'/>
</div>
 

      <div className='text-[#ccff01] flex flex-col items-center gap-4 '>
        <p className=' text-2xl text-center text-[white] font-[Oswald]'>Tasty and Delicious Food just a tap away!</p>
       
       <div className=' flex w-full justify-evenly'> <Button variant="outlined" className='w-[100px]'  color="inherit" onClick={()=>{
          move('/main')
        }}>
          Order
        </Button>

        <Button variant="outlined" className='w-[100px]'  color="inherit" onClick={()=>{
          move('/new')
        }}>
          Sign In
        </Button>
        </div>
 

      </div>
  </div>

  )
}
</div>
    </div>
  )
}
