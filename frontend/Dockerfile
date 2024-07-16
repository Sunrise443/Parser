FROM node:20-alpine

WORKDIR /app

COPY packag*.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"  ]
