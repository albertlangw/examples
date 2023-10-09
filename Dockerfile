# Use official Node.js runtime as base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working dir
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy your appliucation code to the container
COPY . .

# Expose tthe port your app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "server.js"]