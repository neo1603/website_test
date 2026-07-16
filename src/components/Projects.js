import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
} from '@mui/material';
import {
  LocationOn,
  Map,
  Visibility,
} from '@mui/icons-material';
import { projects } from '../data/projects';

const Projects = () => {
  const navigate = useNavigate();

  const ProjectCard = ({ project }) => (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
        border: '1px solid',
        borderColor: 'grey.200',
        boxShadow: 'none',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderColor: 'secondary.main',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: 'cover' }}
        />
        <Chip
          label={project.status}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            backgroundColor: 'secondary.main',
            color: '#1A1200',
            fontWeight: 700,
            borderRadius: 0.5,
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
          {project.title}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {project.location}
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'secondary.dark' }}>
          {project.price}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {project.description.substring(0, 100)}...
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {project.features.slice(0, 3).map((feature, index) => (
            <Chip
              key={index}
              label={feature}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem', borderRadius: 0.5, borderColor: 'grey.300' }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Map />}
            onClick={(e) => { e.stopPropagation(); window.open(project.mapLink, '_blank'); }}
            sx={{ flex: 1, borderRadius: 0.5, borderColor: 'primary.main', color: 'primary.main' }}
          >
            View Map
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Visibility />}
            onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
            sx={{ flex: 1, borderRadius: 0.5, backgroundColor: 'primary.main', boxShadow: 'none' }}
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 2, mb: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              color: 'primary.main',
            }}
          >
            Our Portfolio
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {projects.length} projects across Mathura–Vrindavan
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{
            mb: 6,
            color: 'text.secondary',
            maxWidth: 800,
            fontWeight: 400,
          }}
        >
          Residential plots, villas, flats and commercial properties — ongoing, upcoming, and completed.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
