import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Chip,
  Stack,
} from '@mui/material';
import {
  LocationOn,
  Business,
  People,
  Star,
  ArrowForward,
  TrendingUp,
  Security,
} from '@mui/icons-material';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const stats = [
    { icon: <LocationOn />, number: '500+', label: 'Plots Sold' },
    { icon: <Business />, number: '50+', label: 'Projects' },
    { icon: <People />, number: '1000+', label: 'Happy Clients' },
    { icon: <Star />, number: '15+', label: 'Years Experience' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Green Valley Society',
      location: 'Gurgaon, Haryana',
      price: '₹2,778/sq ft',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      status: 'Ongoing',
      features: ['24/7 Security', 'Park', 'Shopping Center'],
    },
    {
      id: 2,
      title: 'Royal Gardens',
      location: 'Noida, Uttar Pradesh',
      price: '₹3,333/sq ft',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      status: 'Upcoming',
      features: ['Garden', 'Club House', 'Gym'],
    },
    {
      id: 3,
      title: 'Sunset Heights',
      location: 'Greater Noida, UP',
      price: '₹2,444/sq ft',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      status: 'Completed',
      features: ['Swimming Pool', 'Tennis Court', 'Café'],
    },
  ];

  const whyChooseUs = [
    {
      icon: <Security />,
      title: 'Legal Assurance',
      description: '100% legal documentation and clear titles for all properties with complete transparency.',
    },
    {
      icon: <LocationOn />,
      title: 'Prime Locations',
      description: 'Strategically located in high-growth areas with excellent connectivity and future potential.',
    },
    {
      icon: <TrendingUp />,
      title: 'Quality Infrastructure',
      description: 'World-class amenities and infrastructure development in all our projects.',
    },
    {
      icon: <People />,
      title: 'Expert Guidance',
      description: 'Professional team to guide you through every step of your investment journey.',
    },
  ];

  return (
    <Box>
      {/* Hero Cover Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant={isMobile ? 'h2' : 'h1'}
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  background: 'linear-gradient(45deg, #ffffff 30%, #e0e7ff 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                }}
              >
                Your Dream Property Awaits
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                Discover premium land and plots in prime locations with world-class amenities. 
                Invest in your future with Agrawal Builders.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/projects')}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    '&:hover': {
                      bgcolor: 'grey.100',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explore Projects
                  <ArrowForward sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    borderRadius: 4,
                    zIndex: -1,
                  },
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 4,
                    p: 4,
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Quick Stats
                  </Typography>
                  <Grid container spacing={2}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} key={index}>
                        <Box sx={{ textAlign: 'center', p: 2 }}>
                          <Box sx={{ color: 'white', mb: 1, opacity: 0.8 }}>
                            {stat.icon}
                          </Box>
                          <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2, fontSize: '2rem' }}>
                  {stat.icon}
                </Box>
                <Typography variant="h3" component="div" sx={{ fontWeight: 800, mb: 1, color: 'primary.main' }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Featured Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Discover our most popular and high-potential properties in prime locations
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={project.image}
                      alt={project.title}
                    />
                    <Chip
                      label={project.status}
                      color={project.status === 'Completed' ? 'success' : project.status === 'Ongoing' ? 'warning' : 'info'}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <LocationOn sx={{ mr: 1, fontSize: '1rem' }} />
                      {project.location}
                    </Typography>
                    <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                      {project.price}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.features.map((feature, index) => (
                        <Chip
                          key={index}
                          label={feature}
                          size="small"
                          variant="outlined"
                          sx={{ mr: 1, mb: 1, fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => navigate('/projects')}
                      sx={{
                        mt: 'auto',
                        py: 1.5,
                        fontWeight: 600,
                        borderRadius: 2,
                      }}
                    >
                      View Details
                      <ArrowForward sx={{ ml: 1, fontSize: '1rem' }} />
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Why Choose Agrawal Builders?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            We are committed to providing the best investment opportunities with complete transparency
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'grey.200',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 3, fontSize: '3rem' }}>
                  {item.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.main', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Invest in Your Future?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Join thousands of satisfied customers who have trusted Agrawal Builders for their property investments
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/projects')}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: 'grey.100',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View All Projects
                <ArrowForward sx={{ ml: 1 }} />
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Free Consultation
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 