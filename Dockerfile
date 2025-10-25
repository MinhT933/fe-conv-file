# syntax=docker/dockerfile:1.5

FROM node:22-alpine AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY package-lock.json* ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and lock file
COPY package*.json ./
COPY package-lock.json* ./

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

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

# Copy package files
COPY package*.json ./
COPY package-lock.json* ./

# Install only production dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.ts ./next.config.ts

# Switch to non-root user
USER nextjs

EXPOSE 3001
ENV PORT 3001

CMD ["npm", "start"]
