#!/bin/bash

# Stop and remove existing containers
echo "Stopping existing containers..."
docker-compose down

# Build and start the new containers
echo "Building and starting new containers..."
docker-compose up -d --build

# Show container status
echo "Container status:"
docker-compose ps

echo "Deployment complete! Your application is running at http://localhost:3001"
