import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Extrainfo from './extrainfo'

export default function Showcart() {
    const [nav,sehu]=useState(true)

    const arraydata = useSelector((state)=> state.cart.itemList)
    console.log(arraydata)
  return (
    
           <div>
            <div className={nav ? '   fixed left-0 top-0 w-full h-full bg-black/70' : ''}>


              <div className={nav ?' fixed right-0 top-0 w-[100%] sm:w-[40%] md:w-[60%]   h-full bg-white  md:p-2 ease-in duration-500    ': ' h-full fixed right-[-100%] top-[0] ease-in duration-500 '}>
            
                  <div className=' flex justify-end mb-16'>
                    <FaTimes size={40}/>

                  </div>

                  <div className='border flex flex-col p-4  items-center   md:h-[100%] '>

                    <p>Cart</p>

           <ul className='border p-5 w-full'>
            {
                arraydata.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Extrainfo id={item.id} price={item.price} name={item.name} total={item.totalprice} quantity={item.quantity}/>
                        </li>
                    )

                })
            }

     
                  
         

                      
                    </ul>

        

                  </div>
                  

               

              </div>
              </div>
    </div>
  )
}
