FROM node:8
WORKDIR /home/node/app
VOLUME . /home/node/app
RUN npm install
EXPOSE 3000