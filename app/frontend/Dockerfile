FROM node:16-alpine3.17
RUN apk add lsof
RUN npm install -g expo-cli
RUN mkdir -p /home/app && chown -R node:node /home/app
USER node
WORKDIR /home/app
COPY --chown=node:node package*.json ./
RUN npm install -E
COPY --chown=node:node . .
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]