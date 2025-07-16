import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3a8a',
    },
    secondary: {
      main: '#f59e0b',
    },
  },
  typography: {
    fontFamily: 'Inter, Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Hero />
        <Services />
        <Projects />
        <Insights />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 