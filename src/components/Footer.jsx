import { Box, Typography, IconButton, Stack, Link } from '@mui/material';
import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2c2c2c', color: '#fff', py: 4, px: 2 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        textAlign={{ xs: 'center', md: 'left' }}
      >
        {/* Sección de texto */}
        <Box>
          <Typography variant="body2">
            © {new Date().getFullYear()} Servicios Técnicos Industriales. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2">
            Ubicación: Mendoza-Argentina.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Contacto:{' '}
            <Link
              href="mailto:vantexindustrial2019@outlook.com"
              color="inherit"
              underline="hover"
            >
              vantexindustrial2019@outlook.com
            </Link>{' '}
            | Tel: +54 9 261 5952028 
          </Typography>
        </Box>

        {/* Redes sociales */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            color="inherit"
            href="https://www.facebook.com/profile.php?id=61576038615973&locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/vantex.servicios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/gustavo-lucero-282631127/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={{ color: '#D3D3D3' }} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://wa.me/message/EZQITYKXASOWF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp sx={{ color: '#25D366' }} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
