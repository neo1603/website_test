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
import { useLanguage } from '../context/LanguageContext';
import { logEvent } from '../firebase';

const Hero = () => {
  const theme = useTheme();
  const { t } = useLanguage();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: '96px', md: '130px' },
          pb: { xs: 5, md: 7 },
        }}
      >
        {/* Organic blob decoration, reshaped into a quiet temple-spire silhouette */}
        <Box
          component="svg"
          viewBox="0 0 300 300"
          sx={{
            position: 'absolute',
            width: 460,
            height: 460,
            top: -160,
            right: -170,
            opacity: 0.12,
          }}
        >
          <defs>
            <linearGradient id="templeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={theme.palette.primary.main} />
              <stop offset="100%" stopColor={theme.palette.primary.dark} />
            </linearGradient>
          </defs>
          <path
            d="M150 20 L175 95 L215 95 L215 280 L85 280 L85 95 L125 95 Z"
            fill="url(#templeGrad)"
          />
          <circle cx="150" cy="18" r="10" fill={theme.palette.primary.dark} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: 260,
            height: 260,
            bottom: -100,
            right: 80,
            borderRadius: '60% 40% 48% 52% / 52% 48% 52% 48%',
            backgroundColor: theme.palette.secondary.main,
            opacity: 0.1,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ maxWidth: 560 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: '0.18em',
                mb: 2,
                display: 'block',
              }}
            >
              {t('hero_eyebrow')}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Optima, Candara, "Century Gothic", sans-serif',
                color: theme.palette.text.primary,
                fontWeight: 700,
                fontSize: { xs: '2.4rem', md: '3rem', lg: '3.4rem' },
                mb: 3,
                lineHeight: 1.14,
              }}
            >
              {t('hero_title_1')}{' '}
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                {t('hero_title_accent')}
              </Box>{' '}
              {t('hero_title_2')}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Charter, Georgia, serif',
                color: '#3D4A41',
                mb: 4,
                fontWeight: 400,
                fontSize: '1.05rem',
                lineHeight: 1.75,
              }}
            >
              {t('hero_subtitle')}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => { logEvent('select_content', { item: 'hero_view_projects' }); scrollToSection('#projects'); }}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: '#ffffff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                {t('hero_view_projects')}
                <ArrowForward sx={{ ml: 1 }} />
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="tel:+919084203961"
                onClick={() => logEvent('contact', { method: 'call', location: 'hero' })}
                sx={{
                  borderColor: theme.palette.primary.main,
                  borderWidth: 1.5,
                  color: theme.palette.primary.dark,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1.5,
                    backgroundColor: 'rgba(20,107,82,0.06)',
                  },
                }}
              >
                <Phone sx={{ mr: 1 }} />
                {t('hero_call_now')}
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="https://wa.me/919084203961"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logEvent('contact', { method: 'whatsapp', location: 'hero' })}
                sx={{
                  borderColor: theme.palette.primary.main,
                  borderWidth: 1.5,
                  color: theme.palette.primary.dark,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    borderWidth: 1.5,
                    backgroundColor: 'rgba(20,107,82,0.06)',
                  },
                }}
              >
                <WhatsApp sx={{ mr: 1 }} />
                {t('hero_whatsapp')}
              </Button>
            </Box>

            {/* Quick Stats */}
            <Box sx={{ display: 'flex', gap: { xs: 4, md: 6 }, flexWrap: 'wrap', mb: 3 }}>
              {[
                { value: '1,000+', label: t('stat_families') },
                { value: '50+', label: t('stat_projects') },
                { value: '15+', label: t('stat_years') },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, color: theme.palette.primary.dark }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Yamuna blue touch */}
            <Typography
              sx={{
                fontFamily: 'Optima, Candara, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#1D6F9C',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              {t('hero_ghat')}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Yamuna wave divider */}
      <Box sx={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 24" width="100%" height="24" preserveAspectRatio="none">
          <path
            d="M0 12 Q 90 0, 180 12 T 360 12 T 540 12 T 720 12 T 900 12 T 1080 12 T 1260 12 T 1440 12"
            fill="none"
            stroke="#1D6F9C"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </Box>

      {/* Featured photo card */}
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            height: { xs: 220, md: 320 },
            borderRadius: 5,
            overflow: 'hidden',
            boxShadow: '0px 18px 40px -18px rgba(11,70,54,0.45)',
            mb: 2,
          }}
        >
          <Box
            component="img"
            src="/images/kvaan-tower.jpg"
            alt="Kvaan Tower, Krishna Nagar, Mathura"
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(0deg, rgba(11,70,54,0.75) 0%, rgba(11,70,54,0.15) 55%, rgba(11,70,54,0.05) 100%)`,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: 'rgba(255,255,255,0.94)',
              color: theme.palette.primary.dark,
              fontWeight: 700,
              fontSize: '0.75rem',
              px: 2,
              py: 0.75,
              borderRadius: 100,
            }}
          >
            {t('hero_photo_tag')}
          </Box>
          <Box sx={{ position: 'absolute', bottom: 20, left: 24, color: 'white' }}>
            <Typography sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              {t('hero_photo_title')}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {t('hero_photo_sub')}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
