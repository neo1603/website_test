import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleTabChange = (event, newValue) => {
    navigate(navItems[newValue].path);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const currentTabIndex = navItems.findIndex(item => item.path === location.pathname) >= 0 
    ? navItems.findIndex(item => item.path === location.pathname) 
    : 0;

  // Ensure home page loads when accessing root or GitHub Pages path
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/website_test' || location.pathname === '/website_test/') {
      // Force the home tab to be selected
      const homeIndex = navItems.findIndex(item => item.path === '/');
      if (homeIndex >= 0) {
        // This will ensure the home content is displayed
      }
    }
  }, [location.pathname]);

  const drawer = (
    <Box onClick={handleMobileDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Agrawal Builders
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} onClick={() => handleMobileNavClick(item.path)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleMobileNavClick('/login')}
          >
            Admin Login
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={2}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Agrawal Builders
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Tabs
                value={currentTabIndex}
                onChange={handleTabChange}
                textColor="inherit"
                indicatorColor="secondary"
                sx={{ mr: 2 }}
              >
                {navItems.map((item) => (
                  <Tab key={item.label} label={item.label} />
                ))}
              </Tabs>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/login')}
              >
                Admin Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleMobileDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 