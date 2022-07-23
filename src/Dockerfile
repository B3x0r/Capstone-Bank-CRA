FROM node:16.16.0
ENV NODE_ENV=production

WORKDIR /src

RUN npm install --production

COPY . .

CMD [ "node", "app.js" ]