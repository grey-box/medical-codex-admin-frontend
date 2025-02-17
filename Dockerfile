# Build stage
FROM node:20-alpine AS build

#Set Environment Variables (Used on Coolify)
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy only necessary files for the build
COPY *.json ./
COPY *.js ./
COPY *.ts ./
COPY cypress ./cypress
COPY public ./public
COPY src ./src

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]