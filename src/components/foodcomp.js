import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Food(props){


    return(

        <Card sx={{ minWidth: 275 }}>
        <CardContent>
        <CardMedia
        component="img"
        height="194"
        image={`./images/${props.img}`}
        alt={`${props.name}`}

      />

          <Typography>{props.name}</Typography>
          <Typography>GHc{props.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

    









    )
}