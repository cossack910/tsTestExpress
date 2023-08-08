FROM node:18.16.0-alpine
WORKDIR /var/www/tsTestExpress
COPY package*.json ./
RUN npm install -g typescript