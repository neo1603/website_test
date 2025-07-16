import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Snackbar, 
  Alert,
  Rating,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 0,
    category: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add feedback to Firestore
      await addDoc(collection(db, 'feedback'), {
        ...feedback,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        pageUrl: window.location.href
      });

      // Reset form
      setFeedback({
        name: '',
        email: '',
        rating: 0,
        category: '',
        message: ''
      });

      setSnackbar({
        open: true,
        message: 'Thank you for your feedback!',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSnackbar({
        open: true,
        message: 'Error submitting feedback. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFeedback(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Share Your Feedback
        </Typography>
        
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
          We'd love to hear from you! Your feedback helps us improve our services.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Name"
            value={feedback.name}
            onChange={(e) => handleChange('name', e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            value={feedback.email}
            onChange={(e) => handleChange('email', e.target.value)}
            margin="normal"
            required
          />

          <Box sx={{ mt: 2, mb: 1 }}>
            <Typography component="legend">Rating</Typography>
            <Rating
              value={feedback.rating}
              onChange={(event, newValue) => handleChange('rating', newValue)}
              size="large"
            />
          </Box>

          <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              value={feedback.category}
              label="Category"
              onChange={(e) => handleChange('category', e.target.value)}
              required
            >
              <MenuItem value="general">General Feedback</MenuItem>
              <MenuItem value="website">Website Experience</MenuItem>
              <MenuItem value="service">Service Quality</MenuItem>
              <MenuItem value="suggestion">Suggestion</MenuItem>
              <MenuItem value="complaint">Complaint</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            value={feedback.message}
            onChange={(e) => handleChange('message', e.target.value)}
            margin="normal"
            required
            placeholder="Please share your thoughts, suggestions, or concerns..."
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackForm; 