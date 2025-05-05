import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BackgroundCarousel from './BackgroundCarousel';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <BackgroundCarousel />
      <Box sx={{ zIndex: 1 }}>
        <Typography variant="h3" gutterBottom>
          Soluciones Industriales de Confianza
        </Typography>
        <Typography variant="h6" gutterBottom>
          Calidad, compromiso y profesionalismo en cada trabajo.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Conocé nuestros servicios
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
