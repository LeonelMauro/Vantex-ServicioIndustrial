import React, { useState } from 'react';
import {
  Box, Typography, Grid, Paper, Modal, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mantenimiento from '../assets/Servicios/mantenimiento.jpg';
import mantenimiento2 from '../assets/Servicios/mantenimiento2.jpg';
import ingenieria from '../assets/Servicios/ingenieria.jpg';
import ingenieria2 from '../assets/Servicios/ingenieria2.jpeg';
import montaje from '../assets/Servicios/montaje.jpg';
import montaje2 from '../assets/Servicios/montaje2.jpeg';
import montaje3 from '../assets/Servicios/montaje3.jpg';
import diagnostico from '../assets/Servicios/diagnostico.jpg';
import diagnostico3 from '../assets/Servicios/diagnostico3.jpg';
import proyecto from '../assets/Servicios/proyecto.jpg';
import auditoria from '../assets/Servicios/auditoria.jpeg';

const services = [
  {
    name: 'Mantenimiento industrial',
    icon: <BuildIcon />,
    description: 'Servicio de mantenimiento preventivo y correctivo de instalaciones industriales.',
    images: [mantenimiento, mantenimiento2]
  },
  {
    name: 'Ingeniería (Proyectos)',
    icon: <SettingsSuggestIcon />,
    description: 'Diseño y ejecución de proyectos de ingeniería a medida.',
    images: [ingenieria, ingenieria2]
  },
  {
    name: 'Montaje de equipos',
    icon: <PrecisionManufacturingIcon />,
    description: 'Montaje y puesta en marcha de maquinaria industrial.',
    images: [montaje, montaje2,montaje3]
  },
  {
    name: 'Diagnóstico y resolución de fallas',
    icon: <TroubleshootIcon />,
    description: 'Detección y solución rápida de problemas técnicos.',
    images: [diagnostico,diagnostico3]
  },
  {
    name: 'Auditorías técnicas',
    icon: <AssignmentTurnedInIcon />,
    description: 'Evaluaciones técnicas para mejorar procesos y prevenir fallas.',
    images: [proyecto, auditoria]
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };

  return (
    <Box id="servicios" sx={{ py: 8, background: 'linear-gradient(to top, #000A2E, #3B3B3D)' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: '2rem', sm: '2.5rem' },color: '#F5E6D3', fontWeight: 'bold', mb: 6 }}
      >
        Nuestros Servicios
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              onClick={() => handleOpen(service)}
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: '#1A1A1D',
                color: '#FDFCF9',
                borderLeft: '6px solid #B29870',
                transition: 'transform 0.3s',
                cursor: 'pointer',
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

      {/* MODAL CON CARRUSEL E INFORMACIÓN */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: { xs: '90%', md: '60%' },
            transform: 'translate(-50%, -50%)',
            bgcolor: '#1A1A1D',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            outline: 'none',
            color: '#fff'
          }}
        >
          <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}>
            <CloseIcon />
          </IconButton>
          {selectedService && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedService.name}
              </Typography>
              <Slider {...sliderSettings}>
                {selectedService.images.map((img, idx) => (
                  <Box key={idx} sx={{ textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={img}
                      alt={`Imagen ${idx + 1}`}
                      sx={{
                          width: '100%',
                          height: { xs: 200, sm: 300, md: 400 },
                          objectFit: 'contain',
                          borderRadius: 2,
                          backgroundColor: '#000'
                        }}

                    />
                  </Box>
                ))}
              </Slider>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {selectedService.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Services;
