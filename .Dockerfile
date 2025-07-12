# Use the official Node.js image (LTS version)
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# ------------------- Runtime image -------------------
FROM node:20-alpine AS runner

# Set environment variable for production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy built app from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Port used by Cloud Run
ENV PORT 8080
EXPOSE 8080

# Start Next.js app
CMD ["npx", "next", "start", "-p", "8080"]
