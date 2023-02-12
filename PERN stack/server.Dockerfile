FROM node

WORKDIR /app

COPY ./src .

RUN npm install

CMD ["npm", "run", "dev"]