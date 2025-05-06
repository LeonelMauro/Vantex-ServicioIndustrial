import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BackgroundCarousel from './BackgroundCarousel';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <Box
      id="inicio"
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        mt: '64px', // Margen superior para evitar que el header fijo lo tape
      }}
    >
      <BackgroundCarousel />
      <Box
        sx={{
          zIndex: 1,
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background 0.3s',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Soluciones Industriales de Confianza
        </Typography>
        <Typography variant="h6" gutterBottom>
          Calidad, compromiso y profesionalismo en cada trabajo.
        </Typography>

        {/* Botón que hace scroll suave hacia "servicios" */}
        <ScrollLink
          to="servicios"
          smooth={true}
          duration={500}
          offset={-64} // ajusta para que no lo tape el header
        >
          <Button variant="contained" color="primary" size="large">
            Conocé nuestros servicios
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Hero;
