FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT
ARG MONGODB_URI
ARG EMAIL_USER
ARG EMAIL_PASS

EXPOSE 5000

CMD [ "node", "server.js" ]