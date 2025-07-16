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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Projects', href: '#projects' },
    { text: 'Insights', href: '#insights' },
    { text: 'Contact', href: '#contact' },
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
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                color: '#1e3a8a',
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
                background: 'linear-gradient(45deg, #ff6b35, #f7931e, #ffd700)',
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
                color: '#1e3a8a',
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
              color: '#ff6b35',
              fontWeight: 500,
              fontSize: '0.8rem',
              fontStyle: 'italic',
            }}
          >
            Being brijwasi
          </Typography>
        </Box>

        {isMobile ? (
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="primary"
                onClick={() => scrollToSection(item.href)}
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

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
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header; 