# Ahmet Kutay Karacair - Portfolio Website

A modern, elegant portfolio website built with HTMX, Express.js, and TailwindCSS.

## Features

- Modern and elegant UI design
- Responsive layout for all device sizes
- Interactive elements using HTMX
- Smooth page transitions
- Contact form with HTMX integration
- Optimized performance

## Tech Stack

- **Frontend**:
  - HTML with HTMX for interactivity
  - TailwindCSS for styling
  - Alpine.js for minimal client-side interactivity

- **Backend**:
  - Express.js
  - Node.js

## Project Structure

```
/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── src/
│   ├── public/            # Static assets and HTML files
│   │   ├── images/        # Image assets
│   │   ├── js/            # JavaScript files
│   │   │   └── main.js    # Main JavaScript file
│   │   ├── partials/      # HTML partials loaded via HTMX
│   │   │   ├── contact.html
│   │   │   ├── education.html
│   │   │   ├── experience.html
│   │   │   ├── projects.html
│   │   │   └── skills.html
│   │   ├── index.html     # Main HTML file
│   │   └── styles.css     # Compiled CSS
│   ├── static/
│   │   ├── css/           # CSS source files
│   │   │   └── input.css  # TailwindCSS input file
│   │   └── js/            # JavaScript source files
│   │       └── main.js    # Main JavaScript source file
│   └── server/            # Server-side code
│       └── api.js         # API routes
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Build the CSS:
   ```bash
   npm run build:css
   # or
   yarn build:css
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Using Docker

#### Development

To run the development environment with Docker:

```bash
docker-compose up dev
```

This will start the application in development mode with hot-reloading enabled.

#### Production

To run the production environment with Docker:

```bash
docker-compose up portfolio
```

Or build and run using the Dockerfile:

```bash
# Build the Docker image
docker build -t kutay-portfolio .

# Run the container
docker run -p 3000:3000 kutay-portfolio
```

## Deployment

This project can be deployed to any hosting service that supports Node.js applications or Docker containers, such as:

- Heroku
- Vercel
- Netlify
- DigitalOcean
- AWS
- Google Cloud Run
- Azure App Service

### Docker Deployment

For platforms that support Docker deployments:

1. Build the Docker image:
   ```bash
   docker build -t kutay-portfolio .
   ```

2. Push to a container registry (example with Docker Hub):
   ```bash
   docker tag kutay-portfolio yourusername/kutay-portfolio
   docker push yourusername/kutay-portfolio
   ```

3. Deploy the container on your preferred platform following their specific instructions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [HTMX](https://htmx.org/) - For the interactive UI
- [TailwindCSS](https://tailwindcss.com/) - For the styling
- [Express.js](https://expressjs.com/) - For the backend
- [Alpine.js](https://alpinejs.dev/) - For minimal client-side interactivity