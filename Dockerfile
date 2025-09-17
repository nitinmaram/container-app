# Step 1: Use Node.js to build the app
FROM node:22 AS build

WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Step 2: Use a lightweight web server for production
FROM nginx:alpine

# Copy React build into nginx’s default public dir
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
 