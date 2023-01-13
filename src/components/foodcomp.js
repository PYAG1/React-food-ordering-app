import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";
import {FaClock, FaShoppingBag} from 'react-icons/fa';
import { useEffect } from "react";

export default function Food({name,id,price,img,delivery}){

const move = useNavigate();
const dispatch = useDispatch();


const addhandler= ()=>{
  dispatch(cartActions.Add({
   id,
    name,
    price,
    img}),cartActions.open())
  

}


useEffect(()=>{
  const timeout = setTimeout(() => {
      dispatch(cartActions.close())
  
    }, 1300);
  },[])



    return (

        <div className=" w-full  h-[300px] md:h-[300px] p" >
        <CardContent>
          <div className="abosolute">
            <img src={`../images/${img}`} className=" w-full h-[200px] object-cover rounded-[3em]" alt={name}/>
        
          </div>
       {/* <CardMedia
        component="img"
      
        className=" object-contain h-[130px]"
     
      
       
        image={`../images/${props.img}`}
        alt={`${props.name}`}

    />*/}
  
<div className=" pt-[1em] flex justify-between">
  <div>
          <div className=" text-xl ite font-medium font-[Oswald]">{name}</div>
          < div className="font-[Roboto]">GHc {price}</div>
          </div>
          
          <button onClick={addhandler}>
            <FaShoppingBag size={22}/>
            
          </button>



          </div>
        </CardContent>

        <div>

         { /*<Button onClick={()=>move(`/main/${props.id}`)}>
            View
  </Button>*/}
        </div>
        
        
      </div>
    )
}