# syntax=docker/dockerfile:1.5

FROM node:22-alpine AS deps
WORKDIR /app

# Copy package files - Add cache bust for lock file changes
COPY package*.json ./
COPY package-lock.json ./

# Install dependencies - Use omit for newer npm compatibility  
RUN npm ci --omit=dev && npm cache clean --force

FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and lock file - Remove wildcard to ensure fresh copy
COPY package*.json ./
COPY package-lock.json ./

# Install all dependencies including devDependencies for build
RUN npm ci && npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy package files - Remove wildcard to ensure fresh copy
COPY package*.json ./
COPY package-lock.json ./

# Install only production dependencies - Use omit for newer npm compatibility
RUN npm ci --omit=dev && npm cache clean --force

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./next.config.js

# Switch to non-root user
USER nextjs

EXPOSE 3001
ENV PORT 3001

CMD ["npm", "start"]
