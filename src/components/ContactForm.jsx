import React from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material'

const ContactForm = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contactanos
      </Typography>
      <Box id='contacto' component="form" noValidate autoComplete="off">
        <TextField fullWidth label="Nombre" margin="normal" />
        <TextField fullWidth label="Correo" margin="normal" />
        <TextField fullWidth label="Mensaje" multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar mensaje
        </Button>
      </Box>
    </Container>
  )
}

export default ContactForm
