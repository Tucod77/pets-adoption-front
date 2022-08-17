import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <Box
          component="span"
          m={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to='/'><h1>Adocão</h1></Link>
          <div>
          <Link to='/new-pet'>
              <Button variant='outlined' sx={{ height: 40 }}>New Pet</Button>
          </Link>
          </div> 
        </Box>
      </nav>
    </>
  )
}

export default NavBar;