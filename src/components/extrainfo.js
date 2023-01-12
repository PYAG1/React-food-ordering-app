import React from 'react'


export default function Extrainfo({id,name,quanity,total,price,img}) {

  /*
  <div className=' bg-[#353535] w-full flex justify-between text-[white] rounded-[10px]'>
      <div className=' flex w-full md:justify-between px-2'>

      <div className='  w-[100px] h-[100px] flex justify-center items-center'>
        <img src={`../images/${img}`} className='w-[80px] h-[80px] object-cover rounded-[20px]'/>
        </div>

      <div className='p-3 flex w-full  justify-between h-[80px]'>
        <div>
        <p className=' lg:text-xl'>{name}</p>

        <div className=' flex'>
          <button>-</button>
          <p>{quanity}</p>
          <button>+</button>

        </div>
        </div>

        <div className=' flex flex-col justify-between h-full'>
        <p>{total}</p>
        <button>Del</button>
        

      </div>

        

      </div>


      </div>
  */ 

  return (
    <div className=' w-full p-1 px-2 rounded-lg flex items-center gap-2'>
       <img src={`../images/${img}`} className='w-[80px] h-[80px] object-cover rounded-[20px]'/>


                

    </div>
    
    
  )
}
