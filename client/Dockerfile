FROM node:23.1

WORKDIR /app

COPY public/ ./public
COPY src/ ./src
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start"]