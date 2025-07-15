import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Search,
  LocationOn,
  AttachMoney,
  SquareFoot,
  CheckCircle,
  FilterList,
} from '@mui/icons-material';

const OurProjects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Green Valley Society',
      location: 'Gurgaon, Haryana',
      price: '₹25,000/sq yd',
      area: '100-500 sq yd',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      status: 'Ongoing',
      description: 'A premium residential society with world-class amenities and modern infrastructure.',
      amenities: [
        '24/7 Security',
        'Park & Garden',
        'Children Play Area',
        'Community Hall',
        'Power Backup',
        'Water Supply',
      ],
      specifications: {
        'Plot Size': '100-500 sq yd',
        'Road Width': '40-60 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
    {
      id: 2,
      title: 'Royal Gardens',
      location: 'Noida, Uttar Pradesh',
      price: '₹30,000/sq yd',
      area: '150-800 sq yd',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      status: 'Upcoming',
      description: 'Luxury plots in the heart of Noida with excellent connectivity and premium amenities.',
      amenities: [
        'Gated Community',
        'Swimming Pool',
        'Gymnasium',
        'Shopping Complex',
        'Medical Center',
        'School Nearby',
      ],
      specifications: {
        'Plot Size': '150-800 sq yd',
        'Road Width': '50-80 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
    {
      id: 3,
      title: 'Sunset Heights',
      location: 'Greater Noida, UP',
      price: '₹22,000/sq yd',
      area: '200-1000 sq yd',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      status: 'Completed',
      description: 'Completed project with ready-to-move plots and all amenities functional.',
      amenities: [
        'Ready to Move',
        'All Amenities Functional',
        'Green Belt',
        'Walking Track',
        'Temple',
        'Market Area',
      ],
      specifications: {
        'Plot Size': '200-1000 sq yd',
        'Road Width': '60-100 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
    {
      id: 4,
      title: 'Emerald City',
      location: 'Faridabad, Haryana',
      price: '₹28,000/sq yd',
      area: '120-600 sq yd',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      status: 'Ongoing',
      description: 'Modern township with smart city features and sustainable development.',
      amenities: [
        'Smart City Features',
        'Solar Power',
        'Rainwater Harvesting',
        'Waste Management',
        'Sports Complex',
        'Hospital Nearby',
      ],
      specifications: {
        'Plot Size': '120-600 sq yd',
        'Road Width': '45-70 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
    {
      id: 5,
      title: 'Golden Meadows',
      location: 'Ghaziabad, UP',
      price: '₹20,000/sq yd',
      area: '100-400 sq yd',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      status: 'Upcoming',
      description: 'Affordable luxury plots with excellent connectivity to Delhi NCR.',
      amenities: [
        'Affordable Pricing',
        'Easy EMI Options',
        'Bank Loan Available',
        'Legal Documentation',
        'Clear Titles',
        'Good Connectivity',
      ],
      specifications: {
        'Plot Size': '100-400 sq yd',
        'Road Width': '30-50 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
    {
      id: 6,
      title: 'Silver Springs',
      location: 'Sonipat, Haryana',
      price: '₹18,000/sq yd',
      area: '150-750 sq yd',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      status: 'Completed',
      description: 'Peaceful residential plots away from city chaos with natural surroundings.',
      amenities: [
        'Peaceful Environment',
        'Natural Surroundings',
        'Fresh Air',
        'Less Pollution',
        'Spacious Plots',
        'Good Investment',
      ],
      specifications: {
        'Plot Size': '150-750 sq yd',
        'Road Width': '40-60 ft',
        'Power Supply': '24/7',
        'Water Supply': '24/7',
        'Sewerage': 'Underground',
        'Street Lights': 'LED',
      },
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Ongoing':
        return 'warning';
      case 'Upcoming':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Our Projects
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Discover our premium land and plot projects across NCR
          </Typography>
        </Container>
      </Box>

      {/* Search and Filter Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search projects by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="All">All Projects</MenuItem>
                <MenuItem value="Upcoming">Upcoming</MenuItem>
                <MenuItem value="Ongoing">Ongoing</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body2" color="text.secondary">
              {filteredProjects.length} projects found
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {project.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AttachMoney sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="h6" color="primary">
                      {project.price}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SquareFoot sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {project.area}
                    </Typography>
                  </Box>
                  <Chip
                    label={project.status}
                    color={getStatusColor(project.status)}
                    size="small"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredProjects.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No projects found matching your criteria
            </Typography>
          </Box>
        )}
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
            <DialogTitle>
              <Typography variant="h5" component="h2">
                {selectedProject.title}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                      borderRadius: 8,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Project Details
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProject.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                      <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                      Location: {selectedProject.location}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      <AttachMoney sx={{ fontSize: 16, mr: 0.5 }} />
                      Price: {selectedProject.price}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      <SquareFoot sx={{ fontSize: 16, mr: 0.5 }} />
                      Area: {selectedProject.area}
                    </Typography>
                    <Chip
                      label={selectedProject.status}
                      color={getStatusColor(selectedProject.status)}
                      sx={{ mt: 1 }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Amenities
                  </Typography>
                  <List dense>
                    {selectedProject.amenities.map((amenity, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={amenity} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>
                    Specifications
                  </Typography>
                  <List dense>
                    {Object.entries(selectedProject.specifications).map(([key, value]) => (
                      <ListItem key={key}>
                        <ListItemText
                          primary={key}
                          secondary={value}
                          primaryTypographyProps={{ variant: 'subtitle2' }}
                          secondaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button variant="contained" color="primary">
                Contact Sales
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default OurProjects; 