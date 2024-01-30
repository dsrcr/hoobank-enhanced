# Use an official Node.js image as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port that your application runs on (replace 3000 with your actual port)
EXPOSE 5174

# Command to run the application
CMD ["npm", "run", "serve", "--", "--port", "3000"]
