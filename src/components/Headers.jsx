import React, { useState } from 'react';
import logo from '../assets/img/logo.jpeg';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = ['inicio', 'nosotros', 'servicios', 'contacto'];

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ backgroundColor: '#333' }}>
          <ScrollLink
            to="inicio"
            smooth={true}
            duration={600}
            offset={-70}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <Box component="img" src={logo} alt="Logo" sx={{ height: 70, mr: 2 }} />
          </ScrollLink>

          <Typography variant="h6" sx={{fontFamily: 'Playfair Display, serif', color: 'white', flexGrow: 1 }}>
            Servicios Técnicos Industriales
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon sx={{ color: '#D2B48C' }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <List sx={{ width: 200 }}>
                  {sections.map((section) => (
                    <ListItem
                      button
                      key={section}
                      onClick={() => setOpenDrawer(false)}
                    >
                      <ScrollLink
                        to={section}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        style={{
                          textDecoration: 'none',
                          color: '#333',
                          width: '100%',
                        }}
                      >
                        <ListItemText primary={section.toUpperCase()} />
                      </ScrollLink>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {sections.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  style={{
                    marginLeft: 24,
                    marginRight: 24,
                    color: '#D2B48C',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1rem',
                    transition: 'background 0.3s',
                    padding: '6px 12px',
                    borderRadius: '4px',
                  }}
                  activeStyle={{ backgroundColor: '#555' }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).toLowerCase()}
                </ScrollLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
