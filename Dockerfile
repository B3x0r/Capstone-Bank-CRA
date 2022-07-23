FROM node:16.16.0
ENV NODE_ENV=production

WORKDIR /src

COPY . .

RUN rm -rf api
RUN npm install --omit=dev
RUN npm run build

EXPOSE 8080

CMD [ "node", "app.js" ]