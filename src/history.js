import { collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { database } from './components/firebase'
import Propcomponent from './components/historypropcomponent'
import { UseLog } from './utility'
import { FaArrowLeft} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


export default function History() {

 

  const {container,getOrderData,user } = UseLog()


  const newcontainer =container.filter((item)=>{
   return user === item.username
  }) ;

  const con = newcontainer.sort((a,b)=>{



if(a.currenttime < b.currenttime){
  return 1;
}
if ( a.currenttime> b.currenttime ){
  return -1;
}
return 0;
}
  );


  console.log(con)

  const orderHistory = newcontainer.map((item)=>{
    return   <Propcomponent key={item.id}  {...item}/>    
  })

  const move = useNavigate();



  console.log(container)


  useEffect(()=>{
    getOrderData()
  },[container])

  
  return (
    <div>
      <div className='   w-full text-white  h-full bg-[#1f1f1f] p-3 rounded-b-[1em] '>
      <button className=' mb-7' onClick={()=>move('/main')}>

        <FaArrowLeft size={28} className=''/>
      </button>
      <p className='font-[Oswald] text-3xl pl-2 mb-4'>Your History</p>
      </div>


      <div className=' mt-8 p-4 md:px-[10em] '>
        
        {orderHistory}

      </div>



    </div>
  )
}
