import React from "react";
// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Furniture(props) {
  return (
    <Card
      sx={{ maxWidth: 300, height: "32vh" }}
      style={props.style}
      onClick={props.onClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imgLink}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="18px">
            {props.data.name}- Rs.
            {props.data.salePrice ? props.data.salePrice : props.data.price}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Furniture;
