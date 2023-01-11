import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


export default function Food(props){

const move = useNavigate();


    return (

        <div className="border w-full  h-[300px] md:h-[270px] p-1" >
        <CardContent>
          <div>
            <img src={`../images/${props.img}`} className=" w-full h-[140px] object-contain aspect-[4/3]" alt={props.name}/>
          </div>
       {/* <CardMedia
        component="img"
      
        className=" object-contain h-[130px]"
     
      
       
        image={`../images/${props.img}`}
        alt={`${props.name}`}

    />*/}
  
<div className=" pt-[1em]">
          <Typography>{props.name}</Typography>
          <Typography>GHc{props.price}</Typography>
          </div>
        </CardContent>

        <div>
          <Button onClick={()=>move(`/main/${props.id}`)}>
            View
          </Button>
        </div>
        
        
      </div>
    )
}