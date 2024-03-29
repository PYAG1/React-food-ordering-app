import React from 'react'
import { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebase'
import { useNavigate } from 'react-router-dom';
import { UseLog } from '../utility';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartslice';
import Loader from "../images/Loading.svg"

export default function Signin() {
  const [loading,setloading]=useState(false)
    const [saform,sasetform]= useState({
  
        email:'',
        password:''
      });

      function handlein(event){
        const {name,value}= event.target;
        sasetform(prev=>{
            return {...prev,
             [name]:value
           }
           })
        }

      

        const auth = getAuth(app);


        const {details,userName,getdocs,setshow,setmessage}=UseLog()

      


        const navigate = useNavigate()

        const dispatch = useDispatch()



      function Submit(e){
        setloading(true)
        e.preventDefault()
        //signing with firebase
        signInWithEmailAndPassword(auth,saform.email,saform.password)
        .then((res)=>{
        
         
           navigate('/main');
           //likely to delete
           dispatch(cartActions.clearhistory())
        })
        .catch((err)=>{
        
          setshow(true)
          setmessage("Error Signing in")
    
       })
       
       details.map((item)=>{
        if(saform.email === item.email){
          userName(item.name)
        }
      })

      }

      useEffect(()=>{
        getdocs()
      },[])

  return (
    <div >
            <form className=' h-[0310px] p-3' onSubmit={Submit}>
             

             <div className=' flex flex-col justify-evenly h-[250px] '>
             <div className=' flex flex-col justify-evenly gap-[.6em]'>
             <label  htmlFor='email' className=' text-xl font-semibold  '>Email</label>
          
             <input type='email' name='email' value={saform.email} onChange={handlein} className='text-[black] md:text-xl w-[100%] md:h-[40px] md:w-full border border-black placeholder:pl-1 pl-1' placeholder='enter your email' />
             </div>
             <div  className=' flex flex-col justify-evenly gap-[.6em] '>
             <label htmlFor='email' className=' text-xl font-semibold '>Password</label>
             
             <input type='password' name='password' value={saform.password} onChange={handlein} className='text-[black] md:text-xl w-[100%] md:h-[40px] md:w-full border border-black placeholder:pl-1 pl-1'  placeholder='enter your password' />
             </div>
             </div>
             <div className=' flex justify-center w-full text-white ' >
             <Button type='submit' variant='outlined' color='inherit'><p className=' text-white'>
             {loading ?  <img src={Loader} className='h-[2rem]' key={loading}/> : 'Sign up'}
              </p></Button>
             </div>
             





         
         
         </form>

                
    </div>
  )
}
