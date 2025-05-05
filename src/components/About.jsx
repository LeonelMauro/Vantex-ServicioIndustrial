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
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem' }, color: '#F5E6D3' }}
        >
          ¿Quiénes somos?
        </Typography>

        <Typography
          variant="body1"
          sx={{ lineHeight: 1.9, fontSize: '1.2rem', color: '#FDFCF9', mb: 4 }}
        >
          Somos una empresa de servicios técnicos industriales que se especializa en resolver problemas con calidad, compromiso y profesionalismo. Nos diferenciamos por la puntualidad, el orden y la excelencia en cada trabajo.
          <br /><br />
          Brindamos soluciones con una experiencia de calidad total, comunicación clara, orden, resolución eficiente y excelencia profesional. Somos el aliado que soluciona, no el que complica.
          <br /><br />
          En nuestra empresa, la seguridad es una prioridad. Nos aseguramos de cumplir con todas las regulaciones y normativas nacionales e internacionales en nuestros trabajos.
        </Typography>

        {/* Íconos con valores */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <AccessTimeIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' }}>Puntualidad</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <PrecisionManufacturingIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' }}>Calidad Técnica</Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <SecurityIcon sx={{ fontSize: 60, color: '#D2B48C' }} />
            <Typography variant="h6" sx={{ mt: 1, fontSize: '1.1rem' }}>Seguridad</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
