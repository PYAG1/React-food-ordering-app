import React from 'react'
import Nav from './Nav'
import fooddata from '../fooddata.js'
import Food from './foodcomp'

export default function Main() {
console.log(fooddata);

  const foodD= fooddata.map((item,index)=>{
    return <Food key={index} id={item.id} name={item.name} price={item.price} img={item.img}/>
  })

  return (
    <div>
        <Nav/>
<div>
      {foodD}
      </div>
    </div>
  )
}
