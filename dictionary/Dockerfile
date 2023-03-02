FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY . .

RUN yarn install

CMD ["yarn","start"]