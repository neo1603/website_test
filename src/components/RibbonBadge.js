import React from 'react';
import { Box, Typography } from '@mui/material';

export const RIBBON_PRESETS = {
  'New Launch': '#1E293B',
  'Hot Deal': '#DC2626',
  'Popular': '#2F8F5B',
};

const RibbonBadge = ({ label, color }) => {
  if (!label) return null;
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 96, height: 96, overflow: 'hidden', zIndex: 2 }}>
      <Typography
        sx={{
          position: 'absolute',
          top: 18,
          left: -28,
          width: 140,
          transform: 'rotate(-45deg)',
          backgroundColor: color || '#1E293B',
          color: '#fff',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.04em',
          textAlign: 'center',
          py: 0.4,
          textTransform: 'uppercase',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default RibbonBadge;
