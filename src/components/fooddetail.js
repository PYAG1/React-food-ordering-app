import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import fooddata from '../fooddata.js'
import {FaClock,FaFire,FaStar} from 'react-icons/fa'
import { Button } from '@mui/material'


export default function Fooddetail() {
    const {userId} = useParams()

const data= fooddata[userId-1];
    const [view, setview]= useState(false);





  return (
<div>{userId}</div>




    
  )
}
