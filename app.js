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

// Special route for partials CSS to ensure it's always fresh
app.get('/partials-styles.css', (req, res) => {
  res.setHeader('Cache-Control', 'no-store'); // Prevent caching
  res.sendFile(path.join(__dirname, 'src/public/partials-styles.css'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// HTML Partials Routes - These will be loaded via HTMX
app.get('/partials/experience', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/experience.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/projects', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/projects.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/skills', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/skills.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/education', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/education.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/contact', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/contact.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

// Main route - serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

// Catch-all route to redirect to home
app.get('*', (req, res) => {
  // Check if the path starts with /partials but isn't one of our defined routes
  if (req.path.startsWith('/partials/')) {
    // For any other /partials/* routes, serve index.html
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  } else {
    // For any other routes, redirect to home
    res.redirect('/');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});