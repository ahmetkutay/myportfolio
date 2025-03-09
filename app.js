const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const apiRoutes = require('./src/server/api');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression()); // Compress responses
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://unpkg.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'"]
    }
  }
})); // Security headers

// Serve static files
app.use(express.static(path.join(__dirname, 'src/public'), {
  maxAge: '1d', // Cache static assets for 1 day
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      // Set specific cache control for CSS files
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day in seconds
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// HTML Partials Routes - These will be loaded via HTMX
app.get('/partials/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/partials/experience.html'));
});

app.get('/partials/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/partials/projects.html'));
});

app.get('/partials/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/partials/skills.html'));
});

app.get('/partials/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/partials/education.html'));
});

app.get('/partials/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/partials/contact.html'));
});

// Main route - serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

// Catch-all route to redirect to home
app.get('*', (req, res) => {
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});