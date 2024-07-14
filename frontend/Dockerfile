FROM node:20-alpine

WORKDIR /app

COPY pacage*.json ./

COPY ./src ./src
COPY ./public ./public

RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

EXPOSE 5173

CMD ["serve", "-s", "build"]
