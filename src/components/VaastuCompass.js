import React from 'react';
import { Box, Typography } from '@mui/material';

const DIRECTIONS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

const FULL_NAME = {
  N: 'North', NE: 'North-East', E: 'East', SE: 'South-East',
  S: 'South', SW: 'South-West', W: 'West', NW: 'North-West',
};

const VAASTU_NOTES = {
  N: 'Associated with Kubera, the lord of wealth — considered highly auspicious for entrances.',
  NE: 'Known as Ishaan corner — the most auspicious direction in Vaastu Shastra, ideal for the main entrance.',
  E: 'Faces the rising sun — considered auspicious and energising, a popular choice for homes.',
  SE: 'Governed by Agni, the fire deity — traditionally recommended for kitchens rather than entrances.',
  S: 'Ruled by Yama — acceptable for construction but less preferred for main entrances.',
  SW: 'Considered the most stable direction, good for the master bedroom, but heavier for entrances.',
  W: 'Associated with Varuna, the water deity — a neutral, workable direction.',
  NW: 'Governed by Vayu, the air deity — good for guest rooms and storage.',
};

const toAbbrev = (facing) => {
  const map = { East: 'E', West: 'W', North: 'N', South: 'S', 'North-East': 'NE', 'North-West': 'NW', 'South-East': 'SE', 'South-West': 'SW' };
  return map[facing] || null;
};

const VaastuCompass = ({ facing }) => {
  const abbrev = toAbbrev(facing);

  if (!abbrev) {
    return (
      <Box sx={{ p: 3, borderRadius: 5, backgroundColor: '#F3F6EF', border: '1px solid #DCE5DC' }}>
        <Typography sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, color: 'primary.dark', mb: 1 }}>
          Plot facing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Facing direction not confirmed for this listing yet — contact us and we'll share the Vaastu details on-site.
        </Typography>
      </Box>
    );
  }

  const angleFor = (dir) => DIRECTIONS.indexOf(dir) * 45;
  const needleAngle = angleFor(abbrev);

  return (
    <Box sx={{ p: 3, borderRadius: 5, backgroundColor: '#F3F6EF', border: '1px solid #DCE5DC' }}>
      <Typography sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, color: 'primary.dark', mb: 2 }}>
        Plot facing — Vaastu reference
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Box sx={{ position: 'relative', width: 140, height: 140, flexShrink: 0 }}>
          <svg viewBox="0 0 140 140" width="140" height="140">
            <circle cx="70" cy="70" r="66" fill="#ffffff" stroke="#DCE5DC" strokeWidth="2" />
            <circle cx="70" cy="70" r="46" fill="none" stroke="#DCE5DC" strokeWidth="1" />
            {DIRECTIONS.map((dir) => {
              const a = (angleFor(dir) - 90) * (Math.PI / 180);
              const x = 70 + 56 * Math.cos(a);
              const y = 70 + 56 * Math.sin(a);
              const isActive = dir === abbrev;
              return (
                <text
                  key={dir}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={isActive ? 14 : 11}
                  fontWeight={isActive ? 700 : 500}
                  fill={isActive ? '#C85A35' : '#3D4A41'}
                  fontFamily="Optima, Candara, sans-serif"
                >
                  {dir}
                </text>
              );
            })}
            <g transform={`rotate(${needleAngle} 70 70)`}>
              <line x1="70" y1="70" x2="70" y2="26" stroke="#146B52" strokeWidth="3" strokeLinecap="round" />
              <polygon points="70,18 65,30 75,30" fill="#146B52" />
            </g>
            <circle cx="70" cy="70" r="5" fill="#146B52" />
          </svg>
        </Box>
        <Box sx={{ minWidth: 180, flex: 1 }}>
          <Typography variant="h6" sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, color: 'secondary.dark', mb: 0.5 }}>
            {FULL_NAME[abbrev]}-facing
          </Typography>
          <Typography variant="body2" sx={{ color: '#3D4A41', lineHeight: 1.7 }}>
            {VAASTU_NOTES[abbrev]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VaastuCompass;
