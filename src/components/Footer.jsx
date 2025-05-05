import React from 'react';
import { Box, Typography, IconButton, Button, Stack } from '@mui/material';
import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2c2c2c', color: '#fff', py: 4, px: 2 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Texto de copyright */}
        <Typography variant="body2" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          © {new Date().getFullYear()} Servicios Técnicos Industriales. Todos los derechos reservados.
        </Typography>

        {/* Redes sociales */}
        <Stack direction="row" spacing={2}>
          <IconButton color="inherit" href="https://facebook.com" target="_blank">
            <Facebook sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <Instagram sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank">
            <LinkedIn sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton color="inherit" href="https://wa.me/549261155234316" target="_blank">
            <WhatsApp sx={{ color: '#25D366' }} />
          </IconButton>
        </Stack>

        {/* Botón de contacto */}
        <Button
          variant="contained"
          color="primary"
          href="mailto:contacto@sti.com"
          sx={{
            backgroundColor: '001351',
            borderRadius: '30px',
            px: 4,
            py: 1,
            fontWeight: 'bold',
          }}
        >
          Contactarnos
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
