# Use an official Node.js runtime as the base image.
FROM node:18-alpine AS builder

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code to the working directory.
COPY . .

# Build the React application for production.
# Inject environment variables during build time.
# The variables in .env will be passed as build arg, and will be visible during build.
ARG REACT_APP_BACKEND_URL
RUN npm run build

# Use a smaller image for the production environment (e.g., Nginx).
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the build artifacts from the builder stage.
COPY --from=builder /app/build .

#copy the nginx.conf file to the correct place.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the Nginx server.
EXPOSE 80

# Start Nginx.
CMD ["nginx", "-g", "daemon off;"]
