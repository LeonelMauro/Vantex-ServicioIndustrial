import { useRef, useState } from 'react'
import { Container, TextField, Button, Snackbar, Alert, Typography, Box } from '@mui/material'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const [formData, setFormData] = useState({ name: '', user_email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Este campo es obligatorio.'
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Este campo es obligatorio.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Correo inválido.'
    }
    if (!formData.message.trim()) newErrors.message = 'Este campo es obligatorio.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    emailjs.sendForm('service_wjzlgli', 'template_3aunuoj', form.current, 'IW5Hw5NjIBADOq2Jh')
      .then(() => {
        setSnackbar({ open: true, message: 'Mensaje enviado con éxito', severity: 'success' })
        setFormData({ name: '', user_email: '', message: '' })
        setErrors({})
        form.current.reset()
      })
      .catch(() => {
        setSnackbar({ open: true, message: 'Error al enviar el mensaje', severity: 'error' })
      })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  return (
    <Container id="contacto" sx={{ py: 8 }}>
      <Typography sx={{fontFamily:'Playfair Display, serif',}} variant="h4" gutterBottom>
        Contactanos
      </Typography>
      <Box
        component="form"
        ref={form}
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          name="name"
          label="Nombre"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="user_email"
          label="Correo"
          type="email"
          fullWidth
          required
          value={formData.user_email}
          onChange={handleChange}
          error={!!errors.user_email}
          helperText={errors.user_email}
        />
        <TextField
          name="message"
          label="Mensaje"
          multiline
          rows={4}
          fullWidth
          required
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar mensaje
        </Button>
      </Box>

      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  )
}

export default ContactForm
