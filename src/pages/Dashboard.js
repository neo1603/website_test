import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  Business,
  TrendingUp,
  People,
  AttachMoney,
  Logout,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Green Valley Society',
      location: 'Gurgaon, Haryana',
      price: '₹25,000/sq yd',
      status: 'Ongoing',
      plots: 150,
      sold: 120,
    },
    {
      id: 2,
      title: 'Royal Gardens',
      location: 'Noida, Uttar Pradesh',
      price: '₹30,000/sq yd',
      status: 'Upcoming',
      plots: 200,
      sold: 0,
    },
    {
      id: 3,
      title: 'Sunset Heights',
      location: 'Greater Noida, UP',
      price: '₹22,000/sq yd',
      status: 'Completed',
      plots: 100,
      sold: 100,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    status: 'Upcoming',
    plots: '',
    sold: '0',
  });

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      location: '',
      price: '',
      status: 'Upcoming',
      plots: '',
      sold: '0',
    });
    setOpenDialog(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      location: project.location,
      price: project.price,
      status: project.status,
      plots: project.plots.toString(),
      sold: project.sold.toString(),
    });
    setOpenDialog(true);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProject) {
      // Edit existing project
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...p, ...formData, plots: parseInt(formData.plots), sold: parseInt(formData.sold) }
          : p
      ));
    } else {
      // Add new project
      const newProject = {
        id: Date.now(),
        ...formData,
        plots: parseInt(formData.plots),
        sold: parseInt(formData.sold),
      };
      setProjects([...projects, newProject]);
    }
    
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

  const stats = [
    {
      title: 'Total Projects',
      value: projects.length,
      icon: <Business />,
      color: 'primary.main',
    },
    {
      title: 'Total Plots',
      value: projects.reduce((sum, p) => sum + p.plots, 0),
      icon: <TrendingUp />,
      color: 'success.main',
    },
    {
      title: 'Plots Sold',
      value: projects.reduce((sum, p) => sum + p.sold, 0),
      icon: <People />,
      color: 'info.main',
    },
    {
      title: 'Revenue (Est.)',
      value: `₹${(projects.reduce((sum, p) => sum + p.sold, 0) * 25000).toLocaleString()}`,
      icon: <AttachMoney />,
      color: 'warning.main',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DashboardIcon sx={{ mr: 1 }} />
              <Typography variant="h5" component="h1">
                Admin Dashboard
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
              startIcon={<Logout />}
            >
              Logout
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: stat.color, mr: 1 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h6" component="h3">
                      {stat.title}
                    </Typography>
                  </Box>
                  <Typography variant="h4" component="div" sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Projects Management */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" component="h2">
              Project Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAddProject}
            >
              Add Project
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Total Plots</TableCell>
                  <TableCell>Plots Sold</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {project.title}
                      </Typography>
                    </TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>{project.price}</TableCell>
                    <TableCell>
                      <Chip
                        label={project.status}
                        color={getStatusColor(project.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{project.plots}</TableCell>
                    <TableCell>{project.sold}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleEditProject(project)}
                        size="small"
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteProject(project.id)}
                        size="small"
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* Add/Edit Project Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {editingProject ? 'Edit Project' : 'Add New Project'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Price per sq yd"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    label="Status"
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Upcoming">Upcoming</MenuItem>
                    <MenuItem value="Ongoing">Ongoing</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Total Plots"
                  name="plots"
                  type="number"
                  value={formData.plots}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Plots Sold"
                  name="sold"
                  type="number"
                  value={formData.sold}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {editingProject ? 'Update' : 'Add'} Project
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default Dashboard; 