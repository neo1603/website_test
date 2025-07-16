import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  Phone,
  Email,
  LocationOn,
  WhatsApp,
  Business,
  Home,
  Apartment,
  Construction,
  Security,
  Payment,
  Support,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    { name: 'Residential Plots', icon: <Home />, description: 'Premium residential plots with modern amenities' },
    { name: 'Commercial Properties', icon: <Business />, description: 'Prime commercial spaces for business growth' },
    { name: 'Luxury Villas', icon: <Apartment />, description: 'Exclusive luxury villas with world-class facilities' },
    { name: 'Construction Services', icon: <Construction />, description: 'End-to-end construction and development' },
    { name: 'Property Management', icon: <Security />, description: 'Professional property management services' },
    { name: 'Investment Advisory', icon: <Payment />, description: 'Expert investment guidance and consultation' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Careers', href: '/careers' },
  ];

  const offers = [
    'Early Bird Discount - 10% off on new bookings',
    'Referral Bonus - ₹50,000 for successful referrals',
    'Flexible Payment Plans - 0% EMI available',
    'Free Legal Documentation',
    'Free Site Visit & Consultation',
    'Loyalty Rewards for existing customers',
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, href: 'https://facebook.com/dreamsbhoomi', color: '#1877f2' },
    { name: 'Twitter', icon: <Twitter />, href: 'https://twitter.com/dreamsbhoomi', color: '#1da1f2' },
    { name: 'Instagram', icon: <Instagram />, href: 'https://instagram.com/dreamsbhoomi', color: '#e4405f' },
    { name: 'LinkedIn', icon: <LinkedIn />, href: 'https://linkedin.com/company/dreamsbhoomi', color: '#0077b5' },
    { name: 'YouTube', icon: <YouTube />, href: 'https://youtube.com/dreamsbhoomi', color: '#ff0000' },
  ];

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Call Us',
      details: [
        '+91 90842 03961',
        '+91 98765 43211',
        '+91 98765 43212',
      ],
      action: 'tel:+919084203961',
    },
    {
      icon: <WhatsApp />,
      title: 'WhatsApp',
      details: [
        '+91 90842 03961',
        'Available 24/7',
      ],
      action: 'https://wa.me/919084203961',
    },
    {
      icon: <Email />,
      title: 'Email Us',
      details: [
        'info@dreamsbhoomi.com',
        'sales@dreamsbhoomi.com',
      ],
      action: 'mailto:info@dreamsbhoomi.com',
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      details: [
        'NH-2, Front of Flyover,',
        'Chhatikara, Vrindavan,',
        'Uttar Pradesh, India',
      ],
      action: 'https://maps.google.com/?q=Chhatikara+Vrindavan+Uttar+Pradesh',
    },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#1e293b', color: 'white' }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'secondary.main' }}>
              DreamsBhoomi
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Established in 2008, DreamsBhoomi is your trusted partner in real estate development. 
              We specialize in premium residential plots, commercial properties, and luxury villas 
              across Mathura Vrindavan region. With over 15 years of experience and 1000+ happy families, 
              we've built a reputation for transparent dealings and quality construction.
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Services & Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'secondary.main' }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.name}
                  href="#services"
                  onClick={() => scrollToSection('#services')}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '&:hover': {
                      color: 'secondary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {service.icon}
                  <Typography variant="body2">{service.name}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'secondary.main' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={link.href.startsWith('#') ? () => scrollToSection(link.href) : undefined}
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  <Typography variant="body2">{link.name}</Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Special Offers */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'secondary.main' }}>
              Special Offers
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {offers.map((offer, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    p: 1.5,
                    borderRadius: 1,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {offer}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'secondary.main' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((contact) => (
                <Box key={contact.title}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ 
                      color: 'secondary.main', 
                      mr: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      {contact.icon}
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>
                      {contact.title}
                    </Typography>
                  </Box>
                  <Link
                    href={contact.action}
                    target={contact.action.startsWith('http') ? '_blank' : undefined}
                    rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      display: 'block',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {contact.details.map((detail, index) => (
                      <Typography key={index} variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {detail}
                      </Typography>
                    ))}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              © 2024 DreamsBhoomi. All rights reserved. | 
              <Link href="/privacy" sx={{ color: 'inherit', textDecoration: 'none', ml: 1 }}>
                Privacy Policy
              </Link> | 
              <Link href="/terms" sx={{ color: 'inherit', textDecoration: 'none', ml: 1 }}>
                Terms of Service
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Support sx={{ fontSize: 16, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  24/7 Customer Support
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Security sx={{ fontSize: 16, color: 'secondary.main' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                  Secure Transactions
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box sx={{ 
          mt: 4, 
          p: 3, 
          backgroundColor: 'rgba(255,255,255,0.05)', 
          borderRadius: 2,
          border: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
            Ready to Find Your Dream Property?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)' }}>
            Get in touch with our experts today for personalized consultation and exclusive offers.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                         <Link
               href="tel:+919084203961"
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textDecoration: 'none',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Phone />
              Call Now
            </Link>
                         <Link
               href="https://wa.me/919084203961"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: 'transparent',
                color: 'secondary.main',
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textDecoration: 'none',
                fontWeight: 600,
                border: '2px solid secondary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <WhatsApp />
              WhatsApp
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 