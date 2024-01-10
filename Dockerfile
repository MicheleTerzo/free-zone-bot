FROM node:21-alpine
LABEL authors="Mr.m98"
RUN mkdir -p /home/node/free-zone-bot/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/free-zone-bot
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
CMD npm run startApp
