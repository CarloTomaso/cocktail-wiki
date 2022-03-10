import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function MyCard({img,name,id,description}) {
  const navigate = useNavigate();
  


  return (
    <Card 
    style={{ border: "none", boxShadow: "none" }}
    onClick={() => {
      navigate('/drink/' + id)
  }}
    sx={{ maxWidth: 345, m: 1}}>
      <CardActionArea
      >
        <CardMedia
          component="img"
          height="350"
          image={img}
          alt="green iguana"
        />
        <CardContent
        
        >
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}