# Use an image with Node.js and a compatible version of Angular CLI
FROM node:16-alpine

# Global install @angular/cli
RUN npm install -g @angular/cli@16.2.3

# Set the working directory inside the container to /app
WORKDIR /app
