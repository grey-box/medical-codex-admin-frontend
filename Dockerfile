# Build stage
FROM node:23-alpine AS build

# Set Environment Variables (Used on Coolify)
ARG NEXT_PUBLIC_API_URL
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
FROM node:23-alpine

WORKDIR /app

# Copy built files and necessary runtime files from the build stage
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port 3000 (default for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]