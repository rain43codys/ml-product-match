FROM node:8
WORKDIR /home/node/app
ADD . /home/node/app
RUN npm install
EXPOSE 3000