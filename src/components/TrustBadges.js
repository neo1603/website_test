import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { VerifiedUser, CalendarMonth, Groups, Home } from '@mui/icons-material';

const TrustBadges = () => {
  const badges = [
    { icon: <CalendarMonth />, label: 'Since 2008' },
    { icon: <VerifiedUser />, label: 'MVDA Approved' },
    { icon: <Groups />, label: '1,000+ Families Housed' },
    { icon: <Home />, label: '50+ Projects Delivered' },
  ];

  return (
    <Box sx={{ backgroundColor: 'primary.dark', py: 2.5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: { xs: 2, md: 3 },
          }}
        >
          {badges.map((badge) => (
            <Box
              key={badge.label}
              sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}
            >
              <Box sx={{ color: 'secondary.light', display: 'flex', '& svg': { fontSize: 20 } }}>
                {badge.icon}
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
                {badge.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrustBadges;
