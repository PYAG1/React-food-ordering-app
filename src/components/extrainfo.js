import React from 'react'
import { Button } from '@mui/material'


export default function Extrainfo({id,name,quanity,total,price,img}) {


  

  return (
  
    <div className=' w-full p-1 px-2 rounded-lg flex items-center gap-2 scroll'>
    <img src={`../images/pizza1.jpg`} className='w-[80px] h-[80px] object-cover rounded-[20px] scroll'/>
    <div className=' flex flex-col gap-2'>
     <p className=' text-base text-[white]'>
         {name}
     </p>
     <p className='text-sm block text-white font-semibold'>
         Ghc {price}
     </p>
     </div>
     <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
         <button>
             +

         </button>
         <p className='w-5 h-5 rounded-sm flex text-white items-center'>{quanity}</p>
         <button>
             -
         </button>
     </div>
     </div>

    


    
  )
}
