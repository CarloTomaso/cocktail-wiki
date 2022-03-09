import {React} from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'



export default function Navbar() {

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Cocktail Wiki By Carlo and Marco
          </Typography>
{/*           <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button> */}
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}


