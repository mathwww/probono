FROM node:8.10.0
RUN mkdir -p /var/lib/node/backend/node_modules && chown -R node:node /var/lib/node/backend
WORKDIR /var/lib/node/backend
COPY package*.json ./
RUN npm install
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 3333
CMD [ "npm", "start" ]