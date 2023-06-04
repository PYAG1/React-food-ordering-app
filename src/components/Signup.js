import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import { app, database } from './firebase';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { collection,addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { UseLog } from '../utility';
import PositionedSnackbar from './snackar2';

export default function Signup() {

//state for input fields

  const [form,setform]= useState({
    name:'',
    email:'',
    password:''
  });

  const Auth = getAuth(app)

  //function to manage state
  function handlein(event){
    const {name,value}= event.target;
    setform(prev=>{
        return {...prev,
         [name]:value
       }
       })
 }
 const {getdocs,setdetails,setmessage,setshow} = UseLog()

 //database for users
 const databas = collection(database,'users')

 //
 const move = useNavigate()


 function Submit(e){
  e.preventDefault()
  setdetails(prev=>{
    return [...prev,form]
  })
//using firebase to create a new user
  createUserWithEmailAndPassword(Auth,form.email,form.password)
  .then((res)=>{

    setmessage(`Your account has been created`)

 setshow(true)
     setTimeout(()=>{
      move('/new/signin')
     },3400)

  //adding the user details to a database
     addDoc(databas,form)
     .then(()=>{
       console.log('data sent')
   
     })
     .catch((err)=>{
      setmessage(`We hit a roadblock!`)
     })
     
    
    
    
    
    })
    .catch((err)=>{
      alert(err.message)
   })
getdocs()
     





 }

  return (
    <form className=' h-[310px] md:h-[360px] p-3 md:p-4' onSubmit={Submit}>
             

    <div className=' flex flex-col justify-evenly h-[250px] gap-[10px]'>
    <div className='flex flex-col gap-[14px]' >
    <label htmlFor='email' className=' text-lg font-semibold '>Email</label>
    <input type='email'  id='email' name='email' placeholder='enter your email' className='text-[black]   md:text-xl w-[100%] md:h-[40px] md:w-full border border-black placeholder:pl-1 pl-1'   value={form.email} onChange={handlein} />
    </div>
    <div  className='flex flex-col gap-[14px]'>
    <label htmlFor='username'  className=' text-lg font-semibold'>Username</label>

    <input type='text' name='name'  placeholder='enter your username' className= ' text-[black]   md:text-xl w-[100%] md:h-[40px] border md:w-full border-black placeholder:pl-1 pl-1 '  value={form.name} onChange={handlein} />
    </div>
    <div  className='flex flex-col gap-[14px]'>
    <label htmlFor='email'  className=' text-lg font-semibold'>Password</label>
    <input type='password' name='password'  placeholder='enter your password' className=' text-[black]  md:text-xl w-[100%] md:h-[40px] md:w-full border border-black placeholder:pl-1 pl-1' value={form.password} onChange={handlein}  />
    </div>
    </div>

    <div className=' flex justify-center w-full mt-[2em] text-white'>
    <Button variant='outlined' type='submit' color='inherit'>Sign up</Button>
    </div>
 




</form>
    
  )
}
