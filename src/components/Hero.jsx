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
       
          transition: 'background 0.3s',
        }}
      >
        <Typography variant="h1" gutterBottom sx={{
              fontFamily: 'Playfair Display, serif', 
              textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 2px rgba(0,0,0,1)`
            }}>
          Servicios Industriales 
        </Typography>
        <Typography variant="h4" gutterBottom sx={{
              color: 'white',
              fontFamily: 'Playfair Display, serif',
              textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 2px rgba(0,0,0,1)`
            }}>
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
          Nuestros servicios
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
};

export default Hero;
