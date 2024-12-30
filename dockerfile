# Step 1: Base image for building the application
FROM node:18 AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Step 2: Run tests (Jest and Cypress)
FROM node:18 AS test

# Set working directory
WORKDIR /app

# Copy necessary files from the base stage
COPY --from=base /app /app

# Run Jest tests
RUN npm run test -- --ci --coverage

# Verify Cypress installation and run tests
RUN npx cypress verify && npm run cypress:run

# Step 3: Production image with Nginx
FROM nginx:alpine AS production

# Copy build files from the base stage
COPY --from=base /app/build /usr/share/nginx/html

# Expose the Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
