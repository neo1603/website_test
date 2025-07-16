import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
} from '@mui/material';
import {
  Phone,
  WhatsApp,
  LocationOn,
  ArrowForward,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 50%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop) center/cover',
          opacity: 0.1,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 300,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                mb: 3,
                lineHeight: 1.2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Find Your Dream
              <Box component="span" sx={{ color: theme.palette.secondary.main, display: 'block', fontWeight: 400 }}>
                Property Today
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.6,
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Premium residential plots, luxury villas, and commercial properties 
              across Mathura Vrindavan region. Established in 2008, we've delivered 1000+ happy families 
              with transparent dealings and quality construction.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('#projects')}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[8],
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Projects
                <ArrowForward sx={{ ml: 1 }} />
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                href="tel:+919084203961"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'white',
                    color: theme.palette.primary.main,
                    borderColor: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: theme.shadows[4],
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Phone sx={{ mr: 1 }} />
                Call Now
              </Button>
            </Box>

            {/* Quick Stats */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 300, color: theme.palette.secondary.main }}>
                    1000+
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: 400 }}>
                    Happy Families
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 300, color: theme.palette.secondary.main }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: 400 }}>
                    Projects
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 300, color: theme.palette.secondary.main }}>
                    15+
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: 400 }}>
                    Years Experience
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 300, md: 500 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: theme.shadows[12],
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, rgba(${theme.palette.primary.main},0.8), rgba(${theme.palette.primary.light},0.6))`,
                  zIndex: 1,
                },
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Dream Property"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`;
                }}
              />
              
              {/* Floating Contact Card */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  right: 20,
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  zIndex: 2,
                  boxShadow: theme.shadows[8],
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, color: theme.palette.primary.main, mb: 2 }}>
                    Get Free Consultation
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="small"
                      href="tel:+919084203961"
                      startIcon={<Phone />}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      }}
                    >
                      Call Now
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="small"
                      href="https://wa.me/919084203961"
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<WhatsApp />}
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                        },
                      }}
                    >
                      WhatsApp
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Location Banner */}
        <Card
          sx={{
            mt: 6,
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 2,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: theme.shadows[4],
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                  Premium Locations Across Uttar Pradesh
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 400 }}>
                  Vrindavan • Mathura • Agra • Greater Noida • Mathura Vrindavan Region
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => scrollToSection('#projects')}
                  startIcon={<LocationOn />}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  View All Locations
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Hero; 