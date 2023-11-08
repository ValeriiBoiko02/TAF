# Use a node base image
FROM node:16

# Create and set the working directory to /app in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY react-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the react-app code to the working directory
COPY react-app/ ./

# Build project
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]