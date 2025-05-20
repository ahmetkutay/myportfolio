const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const helmet = require('helmet');
const apiRoutes = require('./src/server/api');
const config = require('./src/server/config');

// Initialize express app
const app = express();
const PORT = config.PORT;

// Middleware
app.use(compression()); // Compress responses
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://unpkg.com"],
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
  setHeaders: (res, filePath) => {
    // Set appropriate MIME types and cache control headers
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day in seconds
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.gif')) {
      res.setHeader('Content-Type', 'image/gif');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.svg')) {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.ico')) {
      res.setHeader('Content-Type', 'image/x-icon');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.woff')) {
      res.setHeader('Content-Type', 'font/woff');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.ttf')) {
      res.setHeader('Content-Type', 'font/ttf');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.eot')) {
      res.setHeader('Content-Type', 'application/vnd.ms-fontobject');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.otf')) {
      res.setHeader('Content-Type', 'font/otf');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (filePath.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else {
      // Default content type for any other file
      res.setHeader('Content-Type', 'application/octet-stream');
    }
  }
}));

// Special route for partials CSS to ensure it's always fresh
app.get('/partials-styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'no-store'); // Prevent caching
  res.sendFile(path.join(__dirname, 'src/public/partials-styles.css'));
});

// Special route for main styles.css
app.get('/styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Cache-Control', 'no-store'); // Prevent caching

  // Check if the styles.css file exists
  const stylesPath = path.join(__dirname, 'src/public/styles.css');
  if (fs.existsSync(stylesPath)) {
    res.sendFile(stylesPath);
  } else {
    // If the file doesn't exist, return a minimal CSS file
    // This is a temporary solution until the build process is run
    res.status(200).send('/* Temporary styles.css */\n\n/* Run npm run build:css to generate the full stylesheet */');
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// HTML Partials Routes - These will be loaded via HTMX
app.get('/partials/experience', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/experience.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/projects', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/projects.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/skills', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/skills.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/education', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/education.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

app.get('/partials/contact', (req, res) => {
  // Check if this is a direct browser request or an HTMX request
  if (req.headers['hx-request']) {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.setHeader('Cache-Control', 'no-store'); // Prevent caching
    res.sendFile(path.join(__dirname, 'src/public/partials/contact.html'));
  } else {
    // If it's a direct browser request (page reload), serve the index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  }
});

// Main route - serve the index.html file
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

// Handle favicon.ico requests explicitly
app.get('/favicon.ico', (req, res) => {
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.sendFile(path.join(__dirname, 'src/public/favicon.ico'));
});

// Catch-all route to handle undefined routes
app.get('*', (req, res) => {
  // Check if the path starts with /partials but isn't one of our defined routes
  if (req.path.startsWith('/partials/')) {
    // For any other /partials/* routes, serve index.html
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
  } else if (req.path.endsWith('.css')) {
    // For CSS files that don't exist, return a 404 with the correct MIME type
    res.setHeader('Content-Type', 'text/css');
    res.status(404).send('/* CSS file not found */');
  } else {
    // For any other routes, redirect to home
    res.redirect('/');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
