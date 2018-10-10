FROM node:8
WORKDIR /home/node/app
ADD . /home/node/app
RUN npm install
RUN npm install -g nodemon
EXPOSE 3000