import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ opacity: '60%', boxShadow: 'none'}}>
      <Toolbar justifytext="center">
        <Typography py={3} variant="body1" color="inherit">
          © 2021 Doughnut
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;