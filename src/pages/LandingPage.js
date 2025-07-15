import React from 'react';
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
} from '@mui/material';
import {
  LocationOn,
  Business,
  People,
  Star,
  ArrowForward,
} from '@mui/icons-material';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    },
    {
      id: 2,
      title: 'Royal Gardens',
      location: 'Noida, Uttar Pradesh',
      price: '₹3,333/sq ft',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      status: 'Upcoming',
    },
    {
      id: 3,
      title: 'Sunset Heights',
      location: 'Greater Noida, UP',
      price: '₹2,444/sq ft',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      status: 'Completed',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Prime Locations',
      description: 'All our projects are strategically located in high-growth areas with excellent connectivity.',
    },
    {
      title: 'Legal Assurance',
      description: '100% legal documentation and clear titles for all properties.',
    },
    {
      title: 'Quality Infrastructure',
      description: 'World-class amenities and infrastructure development in all our projects.',
    },
    {
      title: 'Expert Guidance',
      description: 'Professional team to guide you through every step of your investment.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Find Your Dream Property
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}
          >
            Premium land and plots in prime locations with world-class amenities
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
          >
            Explore Projects
          </Button>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Featured Projects
          </Typography>
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      📍 {project.location}
                    </Typography>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {project.price}
                    </Typography>
                    <Box
                      sx={{
                        display: 'inline-block',
                        px: 2,
                        py: 0.5,
                        bgcolor: project.status === 'Completed' ? 'success.light' : 
                                project.status === 'Ongoing' ? 'warning.light' : 'info.light',
                        color: project.status === 'Completed' ? 'success.dark' : 
                               project.status === 'Ongoing' ? 'warning.dark' : 'info.dark',
                        borderRadius: 1,
                        fontSize: '0.875rem',
                      }}
                    >
                      {project.status}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              sx={{ px: 4 }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  height: '100%',
                  borderLeft: 4,
                  borderColor: 'primary.main',
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage; 