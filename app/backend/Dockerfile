FROM node:18-alpine3.17
RUN apk add lsof
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
USER node
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
RUN npm install
COPY --chown=node:node src src
COPY --chown=node:node .eslintrc.json ./
COPY --chown=node:node tsconfig.json ./
ENTRYPOINT [ "npm", "run" ]
CMD ["start"]