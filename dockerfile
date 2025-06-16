FROM node:18

# Install dependencies Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-freefont-ttf \
    --no-install-recommends

# Set environment variables untuk Puppeteer
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Buat direktori app
WORKDIR /app

# Copy package.json dulu untuk caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file
COPY . .

# Jalankan aplikasi
CMD ["npm", "start"]
