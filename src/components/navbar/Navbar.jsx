import {React} from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'



export default function Navbar() {

  

  return (
    <Box sx={{ flexGrow: 1 }}
    
    >
      <AppBar position="static" style={{backgroundColor:'transparent', color:'#8b8b8b'}}>
        <Toolbar>
        
          <Typography style={{fontSize:'2em'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
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


