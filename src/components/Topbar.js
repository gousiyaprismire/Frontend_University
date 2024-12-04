import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        
        bgcolor: '#555',
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          University App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
