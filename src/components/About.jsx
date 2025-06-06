import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const About = () => {
  return (
    <Box
    id="nosotros"
      sx={{
        background: 'linear-gradient(to top,rgb(13, 3, 22),rgb(46, 47, 53))', // más oscuro al pie
        color: '#FDFCF9',
        pt: 0,
      }}
    >
    
      {/* Contenido principal */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontFamily: 'Playfair Display, serif',fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem' }, color: '#D2B48C', }}
        >
          ¿Quiénes somos?
        </Typography>

        <Typography
          variant="body1"
          sx={{ lineHeight: 1.9, fontSize: '1.2rem', color: '#FDFCF9', mb: 4 }}
        >
          En <strong>Vantex Industrial</strong> ofrecemos <strong>servicios técnicos industriales en Mendoza</strong>, especializados en <strong>automatización, instalaciones eléctricas</strong> y mantenimiento técnico. Nos destacamos por nuestro compromiso, puntualidad y un enfoque orientado a resultados concretos.
          <br /><br />
          Brindamos soluciones integrales con una atención personalizada, comunicación clara y un enfoque meticuloso en cada detalle. Nuestro objetivo es ser el aliado técnico que resuelve con eficiencia, no el que complica.
          <br /><br />
          La <strong>seguridad industrial</strong> es un pilar en todos nuestros servicios. Trabajamos bajo estrictas normativas nacionales e internacionales, garantizando calidad, cumplimiento y tranquilidad para nuestros clientes.
        </Typography>

        {/* Íconos con valores */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <AccessTimeIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' ,color: '#D2B48C'}}>Puntualidad</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <PrecisionManufacturingIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' ,color: '#D2B48C'}}>Calidad Técnica</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <SecurityIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' ,color: '#D2B48C'}}>Seguridad</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
