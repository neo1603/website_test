# Land Company Website

A modern, responsive website for a land/plot selling company built with React and Material-UI. The website showcases company projects, provides detailed information about plots and societies, and includes an admin panel for content management.

## 🚀 Features

### Public Pages
- **Landing Page**: Company overview, featured projects, and key statistics
- **About Us**: Company history, mission, vision, values, and team information
- **Our Projects**: Comprehensive project listings with filtering and search
- **Contact Us**: Contact form and company contact information

### Admin Panel
- **Login System**: Secure admin authentication
- **Dashboard**: Overview of projects and statistics
- **Project Management**: Add, edit, and delete projects
- **Data Management**: Manage plot details, rates, and project information

## 🛠️ Tech Stack

- **Frontend**: React 18
- **UI Framework**: Material-UI (MUI)
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Styling**: Material-UI System

## 📁 Project Structure

```
land-company-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── Header.js          # Navigation header with tabs
│   ├── pages/
│   │   ├── LandingPage.js     # Homepage with company highlights
│   │   ├── AboutUs.js         # Company information page
│   │   ├── OurProjects.js     # Projects listing and details
│   │   ├── ContactUs.js       # Contact form and information
│   │   ├── Login.js           # Admin login page
│   │   └── Dashboard.js       # Admin dashboard
│   ├── App.js                 # Main app component with routing
│   ├── index.js               # App entry point
│   ├── index.css              # Global styles
│   └── reportWebVitals.js     # Performance monitoring
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd land-company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with company tagline
- Company statistics and achievements
- Featured projects showcase
- "Why Choose Us" section

### About Us (`/about`)
- Company story and history
- Mission and vision statements
- Core values
- Leadership team
- Company achievements

### Our Projects (`/projects`)
- Project listings with images
- Filter by status (Upcoming, Ongoing, Completed)
- Search functionality
- Detailed project information in modal dialogs
- Project specifications and amenities

### Contact Us (`/contact`)
- Contact form with validation
- Company contact information
- Office locations
- FAQ section
- Map placeholder

### Admin Login (`/login`)
- Secure login form
- Authentication simulation
- Error handling
- Demo credentials: admin/admin123

### Admin Dashboard (`/dashboard`)
- Project statistics overview
- Project management table
- Add/Edit/Delete projects
- Form validation
- Logout functionality

## 🎨 Customization

### Colors and Theme
The website uses Material-UI theming. You can customize colors in `src/App.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change primary color
    },
    secondary: {
      main: '#dc004e', // Change secondary color
    },
  },
});
```

### Content Management
- Update company information in respective page components
- Modify project data in `OurProjects.js` and `Dashboard.js`
- Customize contact information in `ContactUs.js`

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

### UI Dependencies
- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material-UI icons
- `@emotion/react` - CSS-in-JS library
- `@emotion/styled` - Styled components

## 🔒 Security Features

- Form validation on all inputs
- Protected admin routes
- Secure login simulation
- Input sanitization

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder
- **Traditional hosting**: Upload files to your web server

## 🔮 Future Enhancements

- [ ] Backend API integration (FastAPI)
- [ ] Real authentication system
- [ ] Image upload functionality
- [ ] Email integration for contact form
- [ ] Interactive maps
- [ ] Blog/News section
- [ ] Customer testimonials
- [ ] Payment gateway integration
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: info@landcompany.com
- Phone: +91 98765 43210

---

**Note**: This is a frontend-only implementation. For production use, integrate with a backend API for data persistence and real authentication. 