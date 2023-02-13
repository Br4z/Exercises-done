FROM node

WORKDIR /app
COPY ./react-tasks-application .

RUN npm install

CMD ["npm", "run", "dev"]