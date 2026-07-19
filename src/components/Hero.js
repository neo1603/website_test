import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  Paper,
} from '@mui/material';
import { Phone, WhatsApp, Search, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { logEvent } from '../firebase';
import { useCollection } from '../hooks/useCollection';

const STATIC_SLIDES = [
  { image: '/images/kvaan-tower.jpg' },
  { image: '/images/goverdhan-chauraha-commercial.jpg' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop' },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=900&fit=crop' },
];

const Hero = () => {
  const theme = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { data: banners } = useCollection('banners');
  const SLIDES = banners.length > 0 ? banners : STATIC_SLIDES;
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [type, setType] = useState('all');

  useEffect(() => {
    if (slide >= SLIDES.length) setSlide(0);
    const timer = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const PROJECT_TYPES = ['Plot', 'Villa', 'Flat', 'Commercial'];
  const PROPERTY_TYPES = ['Independent House', 'Commercial Shop', 'Residential Plot', 'Luxury Apartment'];
  const typeOptions = category === 'Property' ? PROPERTY_TYPES : PROJECT_TYPES;

  const handleCategoryChange = (next) => {
    setCategory(next);
    setType('all');
  };

  const handleSearch = () => {
    logEvent('select_content', { item: 'hero_search', category, location, type });
    const params = new URLSearchParams();
    if (location !== 'all') params.set('location', location);
    if (type !== 'all') params.set('type', type);
    const basePath = category === 'Property' ? '/properties' : '/projects';
    navigate(`${basePath}${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: 480, md: 560 },
          mt: { xs: '56px', md: '64px' },
          py: { xs: 4, md: 0 },
        }}
      >
        {SLIDES.map((s, i) => (
          <Box
            key={s.image}
            component="img"
            src={s.image}
            alt=""
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === slide ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          />
        ))}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.45) 55%, rgba(15,23,42,0.25) 100%)',
          }}
        />

        <Box
          onClick={() => setSlide((slide - 1 + SLIDES.length) % SLIDES.length)}
          sx={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'white', cursor: 'pointer', zIndex: 3, opacity: 0.8, '&:hover': { opacity: 1 } }}
        >
          <ArrowBackIos fontSize="small" />
        </Box>
        <Box
          onClick={() => setSlide((slide + 1) % SLIDES.length)}
          sx={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'white', cursor: 'pointer', zIndex: 3, opacity: 0.8, '&:hover': { opacity: 1 } }}
        >
          <ArrowForwardIos fontSize="small" />
        </Box>

        <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1, zIndex: 3 }}>
          {SLIDES.map((s, i) => (
            <Box
              key={s.image}
              onClick={() => setSlide(i)}
              sx={{
                width: i === slide ? 22 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === slide ? 'secondary.main' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'width 0.3s ease',
              }}
            />
          ))}
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ maxWidth: 560 }}>
            <Typography variant="overline" sx={{ color: theme.palette.secondary.light, fontWeight: 700, letterSpacing: '0.18em', mb: 2, display: 'block' }}>
              {t('hero_eyebrow')}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Optima, Candara, "Century Gothic", sans-serif',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: { xs: '2.2rem', md: '3rem', lg: '3.2rem' },
                mb: 2,
                lineHeight: 1.14,
              }}
            >
              {t('hero_title_1')}{' '}
              <Box component="span" sx={{ color: theme.palette.secondary.light }}>
                {t('hero_title_accent')}
              </Box>{' '}
              {t('hero_title_2')}
            </Typography>

            <Typography variant="body1" sx={{ fontFamily: 'Charter, Georgia, serif', color: 'rgba(255,255,255,0.85)', mb: 3, fontSize: '1.05rem', lineHeight: 1.7 }}>
              {t('hero_subtitle')}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => { logEvent('select_content', { item: 'hero_view_projects' }); navigate('/projects'); }}
                sx={{ backgroundColor: 'secondary.main', color: '#fff', px: 4, py: 1.5, fontSize: '1rem', '&:hover': { backgroundColor: 'secondary.dark' } }}
              >
                {t('hero_view_projects')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="tel:+919084203961"
                onClick={() => logEvent('contact', { method: 'call', location: 'hero' })}
                sx={{ borderColor: '#fff', borderWidth: 1.5, color: '#fff', px: 3, py: 1.5, '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' } }}
              >
                <Phone sx={{ mr: 1 }} fontSize="small" />
                {t('hero_call_now')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="https://wa.me/919084203961"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logEvent('contact', { method: 'whatsapp', location: 'hero' })}
                sx={{ borderColor: '#fff', borderWidth: 1.5, color: '#fff', px: 3, py: 1.5, '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' } }}
              >
                <WhatsApp sx={{ mr: 1 }} fontSize="small" />
                {t('hero_whatsapp')}
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: { xs: 3, md: 5 }, flexWrap: 'wrap' }}>
              {[
                { value: '1,000+', label: t('stat_families') },
                { value: '50+', label: t('stat_projects') },
                { value: '15+', label: t('stat_years') },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography variant="h5" sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, color: '#fff' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Search bar, overlapping the hero/content boundary */}
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Paper
          elevation={0}
          sx={{
            mt: { xs: -4, md: -5 },
            mb: { xs: 4, md: 6 },
            p: { xs: 2, md: 2.5 },
            borderRadius: 2,
            border: '1px solid #E5E7EB',
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            position: 'relative',
            zIndex: 4,
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
        >
          <Box sx={{ display: 'flex', gap: 3, mb: 1.5, borderBottom: '1px solid #E5E7EB', pb: 1 }}>
            {[{ key: 'all', label: t('tab_all') }, { key: 'Project', label: t('nav_projects') }, { key: 'Property', label: t('nav_properties') }].map((tab) => (
              <Box
                key={tab.key}
                onClick={() => handleCategoryChange(tab.key)}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: category === tab.key ? 'secondary.dark' : 'text.secondary',
                  borderBottom: category === tab.key ? '2px solid' : '2px solid transparent',
                  borderColor: category === tab.key ? 'secondary.main' : 'transparent',
                  pb: 1,
                  mb: -1.1,
                }}
              >
                {tab.label}
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 160, flex: 1 }}>
              <Select value={location} onChange={(e) => setLocation(e.target.value)} displayEmpty>
                <MenuItem value="all">{t('filter_all_cities')}</MenuItem>
                <MenuItem value="Vrindavan">Vrindavan</MenuItem>
                <MenuItem value="Mathura">Mathura</MenuItem>
                <MenuItem value="Agra">Agra</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 160, flex: 1 }}>
              <Select value={type} onChange={(e) => setType(e.target.value)} displayEmpty>
                <MenuItem value="all">{t('filter_all_types')}</MenuItem>
                {typeOptions.map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              startIcon={<Search />}
              onClick={handleSearch}
              sx={{ backgroundColor: 'secondary.main', color: '#fff', px: 4, py: 1, '&:hover': { backgroundColor: 'secondary.dark' } }}
            >
              {t('filter_search_button')}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Hero;
