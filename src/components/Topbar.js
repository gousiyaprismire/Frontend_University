import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Topbar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#555' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          University App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
