import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';
import FeedbackForm from '../components/FeedbackForm';

const Feedback = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            Share Your Feedback
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Your feedback helps us improve our services and provide better experiences
          </Typography>
        </Container>
      </Box>

      {/* Feedback Form */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <FeedbackForm />
      </Container>

      {/* Additional Information */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Why Your Feedback Matters
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            mt: 4
          }}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Improve Services
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Your suggestions help us enhance our property offerings and customer service.
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Better Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We use your feedback to create better experiences for all our customers.
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h5" component="h3" gutterBottom color="primary">
                Quick Response
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We review all feedback and respond to important issues within 24 hours.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Feedback; 