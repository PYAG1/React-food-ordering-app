import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { FaArrowLeft, FaTimes } from 'react-icons/fa'
import Extrainfo from './extrainfo'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cartslice'
import empty from '../empty.svg'
import { useNavigate } from 'react-router-dom'
import { UseLog } from '../utility'
import { addDoc, collection } from 'firebase/firestore'
import { database } from './firebase'



export default function Menucontainer() {
    const cartList = useSelector((state)=> state.cart.itemList);
    //to toggle cart
    const togglee= useSelector((state)=> state.cart.showCart)
    //to display items in cart
    const data = cartList.map((item)=>{
        return <Extrainfo key={item.id} {...item}/>
    })

    //getting total 
    
    let total = 0
    cartList.forEach((item)=>{
      total += item.totalprice
      
      })
    
  
      const delivery = 20;

      const finaltotal = total + delivery;


      ////////
    

    const dispatch = useDispatch();

    const close=()=>{
        dispatch(cartActions.togglestae())
    }
    //to clear cart

    const clear =()=>{
        dispatch(cartActions.clearcart())


    }

    //to display empty cart 
    const auth = cartList.length === 0 ;


    const move = useNavigate()

  

    const {user,historyObj,sethistoryObj}= UseLog();


///creating a database for the orders
const orderdatabase= collection(database,'Orders');

/// 

const id =  Math.ceil(Math.random()*10000000)
//const retrieveData = action.payload;

const date= new Date();
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
const acdate = `${date.getDate()}/${date.toLocaleString('default',{month:'short'})}/${date.getFullYear()}`


function add(totalV,array){
  sethistoryObj((prev)=> {
    return {...prev, 

id: id,
username: user,
name: `Order ${id}`,
currenttime: time,
currentdate: acdate,
      total: totalV,
      items: array
    }
  })
}



  

///to add to order history
    function OrderHistory(){
//dispatch(cartActions.addhistory({user,finaltotal})) 

    addDoc(orderdatabase,historyObj)
    .then((res)=>{alert("Order Received")})
    .catch((err)=>alert(err.message))


    }




///check for conditional rendering;
const renderingCheck = user ==='';

//const {getOrderData} = UseLog()










  return (
    <div className={togglee ?  ' fixed left-0 top-0 w-full h-full bg-black/70' : ''}>
    <div className={togglee ?' overscroll-none fixed top-0 right-0 w-full md:w-[375px] z-[9999] drop-shadwo-md h-full bg-white flex  flex-col ease-in duration-300': ' h-full fixed right-[-105%] top-[0] ease-in duration-300 '}>
        <div className='w-full flex items-center justify-between p-4'>
        <button onClick={close} >
            <FaArrowLeft  size={20}/>
        </button>

        <p className=' text-lg font-semibold'>Cart</p>


        <Button onClick={clear} >
            <p>Clear</p>
        </Button>


        </div>

    {/*Bottom section*/ }
    <div className=' w-full h-full  bg-[#1f1f1f] rounded-t-[2rem] flex flex-col'>
        <div className=' w-full h-[340px] md:h-[500px] lg:h-[300px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar'>
        {!auth && <>  
       {data}
       </> }
       {
        auth && (
            <div className=' flex flex-col items-center justify-evenly w-full h-full'>
        <img src={empty} className=' h-[150px]' alt='empty cart'/>
        <p className='text-white text-xl'>Empty Cart</p>
        </div>
        )
       }
   

                

    </div>
    <div className=' w-full h-full  flex-1 bg-[#353535] rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2 text-white'>
      <div className='w-full flex items-center justify-between'>
      
        <p className=' text-lg'>Subtotal</p>
        <p className=' text-lg'>Ghc {total}.00</p>

        

      </div>
      <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Delivery</p>
      <p className=' text-lg'>Ghc{delivery}.00</p>

      

    </div>

 

    <div className=' w-full border-b border-white my-2 lg:my-1'></div>
    <div className='w-full flex items-center justify-between'>
      
      <p className=' text-lg'>Total</p>
      <p className=' text-lg'>Ghc {finaltotal}.00</p>

    </div>
{!renderingCheck &&
  (    <button onClick={()=>{
    add(finaltotal, cartList)
    move('/thanks')

    }} className= ' font-bold w-full h-[50px] lg:h-[35px] text-[black] rounded-[30px] bg-[#ccff01] hover:bg-[white] '>
      Check Out

</button>)
}

{
  renderingCheck &&
  (    <button onClick={()=>{

    move('/thanks')}} className= ' font-bold w-full h-[50px] lg:h-[35px] text-[black] rounded-[30px] bg-[#ccff01] hover:bg-[white] '>
      Check Out

</button>)
}
 


    </div>




        </div>

    </div>
    </div>
        
        
        

    
  )
}
