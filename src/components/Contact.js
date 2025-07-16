import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  Send,
  Business,
  AccessTime,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Call Us',
      details: [
        '+91 90842 03961',
        '+91 98765 43211',
        '+91 98765 43212',
      ],
      action: 'tel:+919876543210',
      description: 'Available 24/7 for your queries',
    },
    {
      icon: <WhatsApp sx={{ fontSize: 40, color: '#25d366' }} />,
      title: 'WhatsApp',
      details: [
        '+91 90842 03961',
        'Quick Response',
      ],
      action: 'https://wa.me/919084203961',
      description: 'Get instant responses on WhatsApp',
    },
    {
      icon: <Email sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email Us',
      details: [
        'info@dreamsbhoomi.com',
        'sales@dreamsbhoomi.com',
      ],
      action: 'mailto:info@dreamsbhoomi.com',
      description: 'Send us detailed inquiries',
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Visit Us',
      details: [
        'NH-2, Front of Flyover,',
        'Chhatikara, Vrindavan,',
        'Uttar Pradesh, India',
      ],
      action: 'https://maps.google.com/?q=Chhatikara+Vrindavan+Uttar+Pradesh',
      description: 'Schedule a site visit',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Thank you! We will get back to you soon.',
      severity: 'success',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 800, 
            textAlign: 'center', 
            mb: 6,
            color: 'primary.main',
          }}
        >
          Contact Us
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 8, 
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Get in touch with our team for personalized consultation, site visits, and exclusive offers. 
          We're here to help you find your dream property.
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card sx={{ p: 4, boxShadow: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                Send us a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<Send />}
                      sx={{
                        backgroundColor: 'primary.main',
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Contact Cards */}
              {contactInfo.map((contact, index) => (
                <Card key={index} sx={{ boxShadow: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ mt: 1 }}>
                        {contact.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                          {contact.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                          {contact.description}
                        </Typography>
                        {contact.details.map((detail, detailIndex) => (
                          <Typography key={detailIndex} variant="body1" sx={{ fontWeight: 500 }}>
                            {detail}
                          </Typography>
                        ))}
                        <Button
                          href={contact.action}
                          target={contact.action.startsWith('http') ? '_blank' : undefined}
                          rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          variant="text"
                          size="small"
                          sx={{ mt: 1, p: 0, minWidth: 'auto' }}
                        >
                          Contact Now →
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Office Hours */}
              <Card sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <AccessTime sx={{ fontSize: 30, color: 'primary.main' }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      Office Hours
                    </Typography>
                  </Box>
                  {officeHours.map((schedule, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {schedule.day}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {schedule.time}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: 'center', color: 'primary.main' }}>
            Find Us on Map
          </Typography>
          <Box
            sx={{
              height: 400,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9024424301687!2d77.3673!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DreamsBhoomi Location"
            />
          </Box>
        </Box>

        {/* Quick Contact Banner */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            backgroundColor: 'primary.main',
            borderRadius: 3,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Need Immediate Assistance?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Our team is available 24/7 to help you with any queries or urgent requirements.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="tel:+919084203961"
              startIcon={<Phone />}
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              Call Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://wa.me/919084203961"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsApp />}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                },
              }}
            >
              WhatsApp
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Snackbar for form submission */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 