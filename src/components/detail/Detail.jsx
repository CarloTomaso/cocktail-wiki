import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';


export default function Detail(props) {

    const ingrendients = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const ing = ingrendients.map(idx => {
       if (props['strIngredient'+idx]) {
           return <h3>{props['strIngredient'+idx]}</h3>
       }
      return null;
      
     
    })



    const quantity = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const qnt = quantity.map(idx => {
      if (props['strMeasure'+idx]) {
          return <h3>{props['strMeasure'+idx]}</h3>
      }
     return null;
     
    
   })



   
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={props.strDrinkThumb} style={{width:'800px', borderRadius:'15px'}}/>
        </Grid>
        <Grid item xs={6} >
          <h1>{props.strDrink}</h1>
          <div className="container" style={{display: "flex", justifyContent: 'center', }}>

          <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
            {ing}
          </div>

          <div style={{display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
            {qnt}
          </div>

         </div>
          
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
    </Box>
  );
}
