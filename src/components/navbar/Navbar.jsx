import {React} from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import { useNavigate } from "react-router-dom";



export default function Navbar() {

  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}
    
    >
      <AppBar position="static" style={{backgroundColor:'transparent', color:'#8b8b8b'}}>
        <Toolbar>
        
          <Typography style={{fontSize:'2em'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Cocktail Wiki By Carlo and Marco
          </Typography>
{           <Button color="inherit" onClick={() => {
            navigate('/')
            }}
            >Home</Button>
         /* <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button> */}
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}


