FROM node

WORKDIR /server

COPY ./src .
COPY ./package_server.json ./package.json
COPY ./package-lock_server.json ./package-lock.json

RUN npm install

CMD ["npm", "run", "start"]