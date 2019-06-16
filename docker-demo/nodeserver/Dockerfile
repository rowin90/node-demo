# FROM node
# ADD ../build /app/build
# ADD ../server /app/server
# WORKDIR /app
# RUN npm init -y&& npm install koa koa-static -S
# EXPOSE 8000
# CMD node ./server/server.js

FROM node
RUN npm i express-generator -g
RUN express app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm start

