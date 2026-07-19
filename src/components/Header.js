import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { lang, setLang, t } = useLanguage();

  const menuItems = [
    { text: t('nav_portfolio'), href: '#projects' },
    { text: t('nav_calculator'), href: '#loan-calculator' },
    { text: t('nav_events'), href: '#events' },
    { text: t('nav_about'), href: '#about' },
    { text: t('nav_contact'), href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem 
          button 
          key={item.text} 
          onClick={() => scrollToSection(item.href)}
          sx={{ py: 2 }}
        >
          <ListItemText 
            primary={item.text} 
            sx={{ 
              textAlign: 'center',
              '& .MuiTypography-root': {
                fontWeight: 600,
                fontSize: '1.1rem',
                color: theme.palette.primary.main,
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        borderBottom: `1px solid #DCE5DC`,
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                }}
              >
                Dreams
              </Typography>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  fontSize: '2rem',
                  cursor: 'pointer',
                  fontFamily: 'serif',
                }}
              >
                भूमि
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: theme.palette.primary.dark,
                  fontWeight: 700,
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                }}
              >
                Developers
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: theme.palette.secondary.main,
                fontWeight: 500,
                fontSize: '0.8rem',
                fontStyle: 'italic',
              }}
            >
              Being brijwasi
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                display: 'flex',
                border: `1.5px solid ${theme.palette.primary.main}`,
                borderRadius: 100,
                overflow: 'hidden',
              }}
            >
              {['en', 'hi'].map((code) => (
                <Box
                  key={code}
                  onClick={() => setLang(code)}
                  sx={{
                    px: 1.5,
                    py: 0.4,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: lang === code ? '#ffffff' : theme.palette.primary.dark,
                    backgroundColor: lang === code ? theme.palette.primary.main : 'transparent',
                  }}
                >
                  {code === 'en' ? 'EN' : 'हिं'}
                </Box>
              ))}
            </Box>

            {isMobile ? (
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  color: theme.palette.primary.dark,
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    onClick={() => scrollToSection(item.href)}
                    sx={{
                      color: theme.palette.primary.dark,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1rem',
                      borderRadius: 100,
                      px: 2,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: '#ffffff',
                        boxShadow: 'none',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'white',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 