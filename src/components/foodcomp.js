import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function Food(props){
    return (

        <div className="border w-full h-[250px]" >
        <CardContent>
          <div>
            <img src={`../images/${props.img}`} className=" w-full h-[130px] object-contain" alt={props.name}/>
          </div>
       {/* <CardMedia
        component="img"
      
        className=" object-contain h-[130px]"
     
      
       
        image={`../images/${props.img}`}
        alt={`${props.name}`}

    />*/}
  

          <Typography>{props.name}</Typography>
          <Typography>GHc{props.price}</Typography>
        </CardContent>
        
        
      </div>
    )
}