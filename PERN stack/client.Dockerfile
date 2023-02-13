FROM node

WORKDIR /client

COPY ./client .

RUN npm install

CMD ["npm", "run", "start"]