import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

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


        const suth = getAuth(app);

      function Submit(e){
        e.preventDefault()
        //signing with firebase
        signInWithEmailAndPassword(auth,saform.email,saform.password)
        .then((res)=>{
           alert('you have signed in')
           navigate('/main');
           
        })

      }
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
