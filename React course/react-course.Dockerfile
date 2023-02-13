FROM node

WORKDIR /app
COPY ./react-course .

RUN npm install

CMD ["npm", "run", "start"]