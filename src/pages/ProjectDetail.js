import React from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { LocationOn, Phone, Email, Map, ArrowBack } from '@mui/icons-material';
import { projects } from '../data/projects';
import VaastuCompass from '../components/VaastuCompass';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ pt: { xs: '110px', md: '140px' }, pb: 10, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, mb: 2 }}>
          Project not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          This listing may have been removed or the link is incorrect.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')} sx={{ backgroundColor: 'primary.main' }}>
          Back to Portfolio
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '70vh' }}>
      <Container maxWidth="lg" sx={{ pt: { xs: '110px', md: '140px' }, pb: { xs: 6, md: 10 } }}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBack />}
          sx={{ mb: 4, color: 'primary.dark', fontWeight: 700 }}
        >
          Back to Portfolio
        </Button>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', borderRadius: 5, overflow: 'hidden', boxShadow: '0px 18px 40px -18px rgba(11,70,54,0.35)' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              />
              <Chip
                label={project.status}
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  backgroundColor: 'rgba(255,255,255,0.94)',
                  color: 'primary.dark',
                  fontWeight: 700,
                  borderRadius: 100,
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontFamily: 'Optima, Candara, "Century Gothic", sans-serif', fontWeight: 700, color: 'primary.main', mb: 2 }}>
              {project.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">{project.location}</Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Charter, Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'secondary.dark', mb: 3 }}>
              {project.price}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#3D4A41' }}>
              {project.description}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                Available Sizes / Units
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {project.plotSizes.map((size, index) => (
                  <Chip key={index} label={size} variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.dark', borderRadius: 100 }} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontFamily: 'Optima, Candara, sans-serif', fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                Features & Amenities
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {project.features.map((feature, index) => (
                  <Chip key={index} label={feature} size="small" sx={{ borderRadius: 100, backgroundColor: '#DCE5DC', color: 'primary.dark' }} />
                ))}
              </Box>
            </Box>

            {(project.completionDate || project.launchDate) && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                {project.completionDate ? `Completion: ${project.completionDate}` : `Launch: ${project.launchDate}`}
              </Typography>
            )}

            <Box sx={{ mb: 4 }}>
              <VaastuCompass facing={project.facing} />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<Phone />}
                href={`tel:${project.contact}`}
                sx={{ flex: 1, minWidth: 150, backgroundColor: 'primary.main', boxShadow: 'none' }}
              >
                Call Now
              </Button>
              <Button
                variant="outlined"
                startIcon={<Email />}
                href={`mailto:${project.email}`}
                sx={{ flex: 1, minWidth: 150, borderColor: 'primary.main', borderWidth: 1.5, color: 'primary.dark' }}
              >
                Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<Map />}
                onClick={() => window.open(project.mapLink, '_blank')}
                sx={{ flex: 1, minWidth: 150, borderColor: 'secondary.main', borderWidth: 1.5, color: 'secondary.dark' }}
              >
                View on Map
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;
