import React from 'react'

export default function Extrainfo({id,name,quanity,total,price}) {
  return (
    <div className=' w-full flex justify-between'>
      <div className=' flex md:gap-6'>
      <div className=' border w-[200px] h-[130px]'></div>
      <div className=' flex flex-col justify-between h-full'>
        <p className=' lg:text-3xl'>{name}</p>

        <div className=' flex'>
          <button>-</button>
          <p>{quanity}</p>
          <button>+</button>

        </div>

        

      </div>
      </div>


      <div className=' flex flex-col justify-between h-full'>
        <p>{total}</p>
        <button>Del</button>
        

      </div>





    </div>
  )
}
