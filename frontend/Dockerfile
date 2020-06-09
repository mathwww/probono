FROM node:8.10.0
RUN mkdir -p /var/lib/node/frontend/node_modules && chown -R node:node /var/lib/node/frontend
WORKDIR /var/lib/node/frontend
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 3000
CMD [ "npm", "start" ]