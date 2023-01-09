import React, { useEffect,useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Firstpage() {

  const [show,setshow]= useState(true);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setshow(false)
    }, 2000);
  },[])
  return (
    <div className='bg-[#1f1f1f] w-full h-screen'>
<div className=' text-[white]'>
<CircularProgress color='inherit'/>
</div>
    </div>
  )
}
