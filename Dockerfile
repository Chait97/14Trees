FROM node:alpine
copy . /app

WORKDIR /app
CMD yarn dev
