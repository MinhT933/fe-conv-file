# syntax=docker/dockerfile:1.5

FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm i

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm i --omit=dev
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# COPY --from=builder /app/next.config.js ./next.config.js  # nếu app cần
EXPOSE 3001
CMD ["npm", "start"]
