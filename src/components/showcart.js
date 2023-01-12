import React from 'react'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Extrainfo from './extrainfo'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartslice'

export default function Showcart() {
    

    const nav = useSelector((state)=>state.cart.showCart);

    const dispatch = useDispatch()

    const close=()=>{
      dispatch(cartActions.togglestae())
      
    }

    const arraydata = useSelector((state)=> state.cart.itemList)
    console.log(arraydata)
  return (
    
           <div>
            <div className={nav ? '   fixed left-0 top-0 w-full h-full bg-black/70' : ''}>


              <div className={nav ?'  fixed right-0 top-0 w-[100%] sm:w-[40%] md:w-[30%]   h-full bg-white  md: ease-in duration-500    ': ' h-full fixed right-[-110%] top-[0] ease-in duration-500 '}>
            
                  <div className=' flex justify-between items-center mb-10 p-2'>
                    <button onClick={close}>
                    <FaArrowLeft  size={30}/>
                    </button>

                    <p className=' text-2xl'>Cart</p>

                    <button>Clear</button>

                  </div>

                  <div className='border rounded-t-[2em] bg-[#1f1f1f]  flex flex-col h-full p-4 w-full items-center '>

                 

           <ul className='overflow-scroll border flex flex-col gap-5  mt-[19px] max-h-full w-full'>
            {
                arraydata.map((item)=>{
                    return (
                        <li key={item.id}>
                            <Extrainfo id={item.id} price={item.price} name={item.name} total={item.totalprice} quantity={item.quantity} img={item.img}/>
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
