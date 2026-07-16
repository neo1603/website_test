import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
} from '@mui/material';

const AboutUs = () => {
  const stats = [
    { value: '2008', label: 'Founded' },
    { value: '1,000+', label: 'Happy Families' },
    { value: '50+', label: 'Projects' },
    { value: '15+', label: 'Years in Brij' },
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, color: 'primary.main', mb: 3 }}>
              About DreamsBhoomi
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              Established in 2008, DreamsBhoomi Developers is a real estate and construction business
              based in the Mathura–Vrindavan region, dealing in residential plots, flats, villas, and
              commercial properties.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8 }}>
              Our current flagship project, Kvaan Tower, sits opposite Hotel Madhuvan in Krishna Nagar,
              Mathura — a gated, MVDA-approved development with showrooms on the ground and first floors
              and flats above. Alongside it, we handle commercial listings across the region, including
              high-visibility properties like our Goverdhan Chauraha shop.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              With over 15 years of experience and 1,000+ families served, we deal in real estate in the
              most ethical way we know how, to help our customers in Shri Dham Vrindavan find land, homes,
              and commercial space they can trust.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {stats.map((stat) => (
                <Grid item xs={6} key={stat.label}>
                  <Box
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      borderRadius: 1,
                      p: 3,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
