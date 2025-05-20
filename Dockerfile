FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build CSS with minification
RUN npx tailwindcss -i src/static/css/input.css -o src/public/styles.css --minify

# Production image, copy all the files and run the app
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3001

# Copy necessary files from builder stage
COPY --from=builder /app/app.js ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src/public ./src/public
COPY --from=builder /app/src/server ./src/server

# Install only production dependencies
RUN npm ci --only=production

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser
RUN chown -R appuser:nodejs /app
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD wget --spider -q http://localhost:3001 || exit 1

EXPOSE 3001

# Start the app
CMD ["node", "app.js"]
