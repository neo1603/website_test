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
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const ProjectCard = ({ project }) => (
    <Card
      onClick={() => navigate(`/project/${project.id}`)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <Box sx={{ position: 'relative', p: 1.5, pb: 0 }}>
        <CardMedia
          component="img"
          height="180"
          image={project.image}
          alt={project.title}
          sx={{ objectFit: 'cover', borderRadius: 3 }}
        />
        <Chip
          label={project.status}
          size="small"
          sx={{
            position: 'absolute',
            top: 24,
            left: 24,
            backgroundColor: 'rgba(255,255,255,0.94)',
            color: 'primary.dark',
            fontWeight: 700,
            borderRadius: 100,
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

        <Typography sx={{ fontFamily: 'Charter, Georgia, serif', fontWeight: 700, fontSize: '1.15rem', mb: 1, color: 'secondary.dark' }}>
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
              sx={{ fontSize: '0.7rem', borderRadius: 100, borderColor: 'grey.300' }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Map />}
            onClick={(e) => { e.stopPropagation(); window.open(project.mapLink, '_blank'); }}
            sx={{ flex: 1, borderColor: 'primary.main', color: 'primary.main' }}
          >
            {t('view_map')}
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Visibility />}
            onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
            sx={{ flex: 1, backgroundColor: 'primary.main', boxShadow: 'none' }}
          >
            {t('details')}
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
              fontFamily: 'Optima, Candara, "Century Gothic", sans-serif',
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            {t('portfolio_title')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {t('portfolio_count', projects.length)}
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
          {t('portfolio_subtitle')}
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
