import React from 'react'
import { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebase'
import { useNavigate } from 'react-router-dom';
import { UseLog } from '../utility';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartslice';

export default function Signin() {

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

        console.log(saform)

        const auth = getAuth(app);


        const {details,userName,user,getdocs}=UseLog()

        console.log(details)


        const navigate = useNavigate()

        const dispatch = useDispatch()



      function Submit(e){
        e.preventDefault()
        //signing with firebase
        signInWithEmailAndPassword(auth,saform.email,saform.password)
        .then((res)=>{
           alert('you have signed in')
           navigate('/main');
           //likely to delete
           dispatch(cartActions.clearhistory())
        })
        .catch((err)=>{
          alert(err.message)
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
             <div className=' flex justify-center w-full'>
             <Button type='submit'>Sign in</Button>
             </div>
             





         
         
         </form>

                
    </div>
  )
}
