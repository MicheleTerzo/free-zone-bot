FROM node:21-alpine
LABEL authors="Mr.m98"
RUN mkdir -p /home/node/free-zone-bot/node_modules && chown -R node:node /home/node/free-zone-bot
WORKDIR /home/node/free-zone-bot
COPY package*.json ./
USER node
COPY --chown=node:node . .
RUN npm install
CMD npm run startApp
