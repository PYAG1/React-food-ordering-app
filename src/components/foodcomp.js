import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartslice";

export default function Food({name,id,price,img}){

const move = useNavigate();
const dispatch = useDispatch();

const addhandler= ()=>{
  dispatch(cartActions.Add({
   id,
    name,
    price


  }))
}


    return (

        <div className=" w-full  h-[300px] md:h-[300px] p" >
        <CardContent>
          <div>
            <img src={`../images/${img}`} className=" w-full h-[200px] object-cover " alt={name}/>
          </div>
       {/* <CardMedia
        component="img"
      
        className=" object-contain h-[130px]"
     
      
       
        image={`../images/${props.img}`}
        alt={`${props.name}`}

    />*/}
  
<div className=" pt-[1em]">
          <Typography>{name}</Typography>
          <Typography>GHc{price}</Typography>
          </div>
        </CardContent>

        <div>

          <button onClick={addhandler}>
            Add
          </button>
         { /*<Button onClick={()=>move(`/main/${props.id}`)}>
            View
  </Button>*/}
        </div>
        
        
      </div>
    )
}