import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Phone, WhatsApp, Search } from '@mui/icons-material';
import { useLanguage } from '../context/LanguageContext';
import { logEvent } from '../firebase';

const MobileActionBar = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const actions = [
    {
      icon: <Search />,
      label: t('nav_portfolio'),
      onClick: () => { logEvent('select_content', { item: 'mobile_bar_portfolio' }); navigate('/projects'); },
    },
    {
      icon: <Phone />,
      label: t('hero_call_now'),
      href: 'tel:+919084203961',
      onClick: () => logEvent('contact', { method: 'call', location: 'mobile_bar' }),
    },
    {
      icon: <WhatsApp />,
      label: t('hero_whatsapp'),
      href: 'https://wa.me/919084203961',
      external: true,
      onClick: () => logEvent('contact', { method: 'whatsapp', location: 'mobile_bar' }),
    },
  ];

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        backgroundColor: 'primary.dark',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0px -4px 16px rgba(0,0,0,0.15)',
      }}
    >
      {actions.map((action) => (
        <Box
          key={action.label}
          component={action.href ? 'a' : 'button'}
          href={action.href}
          target={action.external ? '_blank' : undefined}
          rel={action.external ? 'noopener noreferrer' : undefined}
          onClick={action.onClick}
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.25,
            py: 1.25,
            border: 'none',
            backgroundColor: 'transparent',
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
            '& svg': { fontSize: 20 },
          }}
        >
          {action.icon}
          <Typography variant="caption" sx={{ fontSize: '0.65rem', fontWeight: 600 }}>
            {action.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MobileActionBar;
