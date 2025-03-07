# 🏗️ Stage 1: Build the Next.js app
FROM node:18-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and lock file first (to optimize caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN pnpm run build

# ⚡ Stage 2: Run the optimized production build
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Install only production dependencies
RUN npm install -g pnpm

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules

# Expose port 3000
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
