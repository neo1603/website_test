import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Business,
  ExpandMore,
  Send,
} from '@mui/icons-material';

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <Email />,
      title: 'Email',
      details: ['info@agrawalbuilders.com', 'sales@agrawalbuilders.com'],
    },
    {
      icon: <LocationOn />,
      title: 'Head Office',
      details: ['1st Floor, Vrindavan, Mathura 201318'],
    },
    {
      icon: <Business />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 4:00 PM'],
    },
  ];

  const officeLocations = [
    {
      city: 'Mathura',
      address: '1st Floor, Vrindavan, Mathura 201318',
      phone: '+91 98765 43210',
      email: 'mathura@agrawalbuilders.com',
    },
    {
      city: 'Gurgaon',
      address: '123, Business Park, Sector 18, Gurgaon, Haryana - 122001',
      phone: '+91 98765 43210',
      email: 'gurgaon@agrawalbuilders.com',
    },
    {
      city: 'Noida',
      address: '456, Tech Hub, Sector 62, Noida, Uttar Pradesh - 201301',
      phone: '+91 98765 43211',
      email: 'noida@agrawalbuilders.com',
    },
    {
      city: 'Faridabad',
      address: '789, Industrial Area, Sector 7, Faridabad, Haryana - 121001',
      phone: '+91 98765 43212',
      email: 'faridabad@agrawalbuilders.com',
    },
  ];

  const faqs = [
    {
      question: 'What documents do I need to buy a plot?',
      answer: 'You will need your PAN card, Aadhaar card, address proof, and income proof. For NRI buyers, additional documents like passport and OCI card are required.',
    },
    {
      question: 'Do you provide home loans for plot purchase?',
      answer: 'Yes, we have tie-ups with leading banks and financial institutions. We can help you get home loans with competitive interest rates and easy documentation.',
    },
    {
      question: 'Are all your plots legally compliant?',
      answer: 'Absolutely! All our plots come with clear titles, approved layouts, and complete legal documentation. We ensure 100% legal compliance.',
    },
    {
      question: 'What amenities are included in your projects?',
      answer: 'Our projects include 24/7 security, parks, children play areas, community halls, power backup, water supply, and other modern amenities.',
    },
    {
      question: 'Can I visit the site before booking?',
      answer: 'Yes, we encourage site visits. Our sales team will be happy to arrange a site visit at your convenience. You can also take a virtual tour on our website.',
    },
    {
      question: 'What is the payment plan for your plots?',
      answer: 'We offer flexible payment plans including down payment options and easy EMI schemes. You can pay 10-20% as down payment and the rest in installments.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Get in touch with us for any queries about our projects
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {info.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {info.title}
                </Typography>
                {info.details.map((detail, idx) => (
                  <Typography key={idx} variant="body2" color="text.secondary">
                    {detail}
                  </Typography>
                ))}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form and Office Locations */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<Send />}
                        sx={{ py: 1.5 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Office Locations */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Office Locations
              </Typography>
              <Grid container spacing={3}>
                {officeLocations.map((office, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={1}>
                      <CardContent>
                        <Typography variant="h6" component="h3" gutterBottom color="primary">
                          {office.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {office.address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          📞 {office.phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ✉️ {office.email}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={2}>
          {faqs.map((faq, index) => (
            <Grid item xs={12} key={index}>
              <Accordion elevation={1}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6" component="h3">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Map Placeholder */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Find Us on Map
          </Typography>
          <Box
            sx={{
              height: 400,
              bgcolor: 'grey.300',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary">
              Interactive Map Coming Soon
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs; 