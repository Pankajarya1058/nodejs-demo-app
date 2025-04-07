
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run tests during build
RUN npm test

EXPOSE 3000

CMD ["node", "server.js"]
