import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import {
  Phone,
  WhatsApp,
  ArrowForward,
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      {/* Full-width photo hero */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 'auto', md: 640 },
        }}
      >
        <Box
          component="img"
          src="/images/kvaan-tower.jpg"
          alt="Kvaan Tower, Krishna Nagar, Mathura"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(100deg, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.82) 40%, rgba(13,13,13,0.45) 65%, rgba(255,177,0,0.35) 100%)`,
            zIndex: 1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: { xs: '96px', md: '130px' }, pb: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 700,
                letterSpacing: '0.2em',
                mb: 2,
                display: 'block',
              }}
            >
              Mathura–Vrindavan · since 2008
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.2rem', lg: '3.6rem' },
                mb: 3,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}
            >
              Find Your Dream
              <Box component="span" sx={{ color: theme.palette.secondary.main, display: 'block' }}>
                Property Today
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.7,
                opacity: 0.85,
              }}
            >
              Premium residential plots, luxury villas, and commercial properties
              across Mathura Vrindavan region. Established in 2008, we've delivered 1000+ happy families
              with transparent dealings and quality construction.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection('#projects')}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  color: '#1A1200',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 1,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                    boxShadow: 'none',
                  },
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
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 1,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Phone sx={{ mr: 1 }} />
                Call Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="https://wa.me/919084203961"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 1,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <WhatsApp sx={{ mr: 1 }} />
                WhatsApp
              </Button>
            </Box>

            {/* Quick Stats */}
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 } }}>
              {[
                { value: '1,000+', label: 'Happy Families' },
                { value: '50+', label: 'Projects' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'white', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
