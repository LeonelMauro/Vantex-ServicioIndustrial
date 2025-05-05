import React from 'react';
import logo from '../assets/img/logo.jpeg';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ backgroundColor: '#333' }}>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 70, mr: 2 }}
        />
        <Typography variant="h6" sx={{ color: 'white', flexGrow: 1 }}>
          Servicios Técnicos Industriales
        </Typography>

        <Link href="#inicio" underline="none" sx={{ color: '#D2B48C', mx: 3 }}>
          INICIO
        </Link>
        <Link href="#nosotros" underline="none" sx={{ color: '#D2B48C', mx: 3 }}>
          NOSOTROS
        </Link>
        <Link href="#servicios" underline="none" sx={{ color: '#D2B48C', mx: 3 }}>
          SERVICIOS
        </Link>
        <Link href="#contacto" underline="none" sx={{ color: '#D2B48C', mx: 3 }}>
          CONTACTO
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
