FROM node:latest as build

WORKDIR /app

COPY pacage*.json ./
RUN npm install
COPY . .
RUN npm run bouid
