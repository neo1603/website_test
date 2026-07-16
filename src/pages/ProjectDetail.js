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

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Project not found
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          This listing may have been removed or the link is incorrect.
        </Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Back to Portfolio
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '70vh' }}>
      <Container maxWidth="lg" sx={{ py: { xs: '96px', md: 6 } }}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBack />}
          sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}
        >
          Back to Portfolio
        </Button>

        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', borderRadius: 1, overflow: 'hidden' }}>
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
                  backgroundColor: 'secondary.main',
                  color: '#1A1200',
                  fontWeight: 700,
                  borderRadius: 0.5,
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
              {project.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1" color="text.secondary">{project.location}</Typography>
            </Box>

            <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.dark', mb: 3 }}>
              {project.price}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              {project.description}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                Available Sizes / Units
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {project.plotSizes.map((size, index) => (
                  <Chip key={index} label={size} variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main', borderRadius: 0.5 }} />
                ))}
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                Features & Amenities
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {project.features.map((feature, index) => (
                  <Chip key={index} label={feature} size="small" sx={{ borderRadius: 0.5 }} />
                ))}
              </Box>
            </Box>

            {(project.completionDate || project.launchDate) && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                {project.completionDate ? `Completion: ${project.completionDate}` : `Launch: ${project.launchDate}`}
              </Typography>
            )}

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                startIcon={<Phone />}
                href={`tel:${project.contact}`}
                sx={{ flex: 1, minWidth: 150, backgroundColor: 'primary.main', boxShadow: 'none', borderRadius: 1 }}
              >
                Call Now
              </Button>
              <Button
                variant="outlined"
                startIcon={<Email />}
                href={`mailto:${project.email}`}
                sx={{ flex: 1, minWidth: 150, borderColor: 'primary.main', color: 'primary.main', borderRadius: 1 }}
              >
                Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<Map />}
                onClick={() => window.open(project.mapLink, '_blank')}
                sx={{ flex: 1, minWidth: 150, borderColor: 'secondary.main', color: 'secondary.dark', borderRadius: 1 }}
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
