import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LocationOn,
  Map,
  Visibility,
  Close,
  Phone,
  Email,
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projects = {
    ongoing: [
      {
        id: 1,
        title: "Green Valley Residency",
        location: "Vrindavan",
        price: "₹25,000/sq yd",
        area: "2,500 sq yd",
        status: "ONGOING",
        description: "Premium residential plots with modern amenities, 24/7 security, and excellent connectivity to Mathura Vrindavan region.",
        features: ["24/7 Security", "Garden Area", "Parking Space", "Water Supply", "Electricity"],
        mapLink: "https://maps.google.com/?q=Vrindavan+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
        contact: "+91 98765 43210",
        email: "info@dreamsbhoomi.com",
        completionDate: "December 2024",
        plotSizes: ["200 sq yd", "300 sq yd", "500 sq yd"],
      },
      {
        id: 2,
        title: "Royal Heights",
        location: "Mathura",
        price: "₹30,000/sq yd",
        area: "1,800 sq yd",
        status: "ONGOING",
        description: "Luxury residential plots with world-class infrastructure and premium location benefits.",
        features: ["Gated Community", "Club House", "Swimming Pool", "Gym", "Shopping Center"],
        mapLink: "https://maps.google.com/?q=Mathura+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
        contact: "+91 98765 43211",
        email: "sales@dreamsbhoomi.com",
        completionDate: "March 2025",
        plotSizes: ["250 sq yd", "400 sq yd", "600 sq yd"],
      },
    ],
    upcoming: [
      {
        id: 3,
        title: "Dream City",
        location: "Agra",
        price: "₹35,000/sq yd",
        area: "5,000 sq yd",
        status: "UPCOMING",
        description: "Future-ready smart city project with integrated technology and sustainable living solutions.",
        features: ["Smart City", "Solar Power", "Rainwater Harvesting", "Waste Management", "Green Building"],
        mapLink: "https://maps.google.com/?q=Agra+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        contact: "+91 98765 43212",
        email: "dreamcity@dreamsbhoomi.com",
        launchDate: "January 2025",
        plotSizes: ["300 sq yd", "500 sq yd", "800 sq yd", "1000 sq yd"],
      },
      {
        id: 4,
        title: "Heritage Gardens",
        location: "Vrindavan",
        price: "₹28,000/sq yd",
        area: "3,200 sq yd",
        status: "UPCOMING",
        description: "Heritage-inspired residential project with traditional architecture and modern comforts.",
        features: ["Heritage Design", "Landscaped Gardens", "Community Hall", "Children's Park", "Security"],
        mapLink: "https://maps.google.com/?q=Vrindavan+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
        contact: "+91 98765 43213",
        email: "heritage@dreamsbhoomi.com",
        launchDate: "February 2025",
        plotSizes: ["250 sq yd", "400 sq yd", "600 sq yd"],
      },
    ],
    completed: [
      {
        id: 5,
        title: "Sunshine Colony",
        location: "Mathura",
        price: "₹45,000/sq yd",
        area: "2,000 sq yd",
        status: "COMPLETED",
        description: "Successfully completed residential project with 100% occupancy and excellent amenities.",
        features: ["Completed", "Fully Occupied", "All Amenities", "24/7 Security", "Maintenance"],
        mapLink: "https://maps.google.com/?q=Mathura+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        contact: "+91 98765 43214",
        email: "sunshine@dreamsbhoomi.com",
        completionDate: "June 2023",
        plotSizes: ["200 sq yd", "300 sq yd", "500 sq yd"],
      },
      {
        id: 6,
        title: "Lake View Residency",
        location: "Vrindavan",
        price: "₹40,000/sq yd",
        area: "1,500 sq yd",
        status: "COMPLETED",
        description: "Premium lake-facing residential project with scenic views and luxury amenities.",
        features: ["Lake View", "Premium Location", "Luxury Amenities", "Completed", "Ready to Move"],
        mapLink: "https://maps.google.com/?q=Vrindavan+Uttar+Pradesh",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
        contact: "+91 98765 43215",
        email: "lakeview@dreamsbhoomi.com",
        completionDate: "September 2023",
        plotSizes: ["250 sq yd", "400 sq yd", "600 sq yd"],
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ONGOING':
        return 'warning';
      case 'UPCOMING':
        return 'info';
      case 'COMPLETED':
        return 'success';
      default:
        return 'default';
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }) => (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
            {project.title}
          </Typography>
          <Chip 
            label={project.status} 
            color={getStatusColor(project.status)}
            size="small"
            sx={{ fontWeight: 600 }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {project.location}
          </Typography>
        </Box>
        
        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
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
              sx={{ fontSize: '0.7rem' }}
            />
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Map />}
            onClick={() => window.open(project.mapLink, '_blank')}
            sx={{ flex: 1 }}
          >
            View Map
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Visibility />}
            onClick={() => handleProjectClick(project)}
            sx={{ flex: 1 }}
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  const ProjectSection = ({ title, projects, color }) => (
    <Box sx={{ mb: 6 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          fontWeight: 700, 
          mb: 3, 
          color: color,
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 3,
            backgroundColor: color,
            borderRadius: 2,
          }
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} lg={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 800, 
            textAlign: 'center', 
            mb: 6,
            color: 'primary.main',
          }}
        >
          Our Projects
        </Typography>
        
        <Typography 
          variant="h6" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          Discover our premium residential plots and properties across Mathura Vrindavan region
        </Typography>

        <ProjectSection 
          title="ONGOING PROJECTS" 
          projects={projects.ongoing} 
          color="#f59e0b"
        />
        
        <ProjectSection 
          title="UPCOMING PROJECTS" 
          projects={projects.upcoming} 
          color="#3b82f6"
        />
        
        <ProjectSection 
          title="COMPLETED PROJECTS" 
          projects={projects.completed} 
          color="#10b981"
        />
      </Container>

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ m: 0, p: 2, backgroundColor: 'primary.main', color: 'white' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {selectedProject.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDialog}
                  sx={{ color: 'white' }}
                >
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    style={{ 
                      width: '100%', 
                      height: 300, 
                      objectFit: 'cover',
                      borderRadius: 8 
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                    {selectedProject.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body1">{selectedProject.location}</Typography>
                  </Box>
                  
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                    {selectedProject.price}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {selectedProject.description}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Available Plot Sizes:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {selectedProject.plotSizes.map((size, index) => (
                        <Chip key={index} label={size} color="primary" variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Features & Amenities:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {selectedProject.features.map((feature, index) => (
                        <Chip key={index} label={feature} size="small" />
                      ))}
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<Phone />}
                      href={`tel:${selectedProject.contact}`}
                      sx={{ flex: 1, minWidth: 150 }}
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<Email />}
                      href={`mailto:${selectedProject.email}`}
                      sx={{ flex: 1, minWidth: 150 }}
                    >
                      Email
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button 
                variant="contained" 
                onClick={() => window.open(selectedProject.mapLink, '_blank')}
                startIcon={<Map />}
              >
                View on Map
              </Button>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 