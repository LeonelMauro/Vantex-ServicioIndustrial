import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const services = [
  { name: 'Mantenimiento industrial', icon: <BuildIcon /> },
  { name: 'Ingenieria (Proyectos)', icon: <SettingsSuggestIcon /> },
  { name: 'Montaje de equipos', icon: <PrecisionManufacturingIcon /> },
  { name: 'Diagnóstico y resolución de fallas', icon: <TroubleshootIcon /> },
  { name: 'Auditorías técnicas ', icon: <AssignmentTurnedInIcon /> }
];

const Services = () => {
  return (
    <Box id="servicios" sx={{ py: 8, background: 'linear-gradient(to top, #000A2E, #3B3B3D)' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#F5E6D3', fontWeight: 'bold', mb: 6 }}
      >
        Nuestros Servicios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: '#1A1A1D',
                color: '#FDFCF9',
                borderLeft: '6px solid #B29870',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                {React.cloneElement(service.icon, { sx: { fontSize: 32, color: '#B29870' } })}
                <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                  {service.name}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#D2B48C' }}>
                Soluciones adaptadas a las necesidades de nuestros clientes, con precisión técnica y excelencia operativa.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
