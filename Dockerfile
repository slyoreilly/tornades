# base iùmage
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install --save react-script react react-dom

COPY ./ ./

# start app
#CMD ["next", "dev"]
#CMD ["cd", "syncmon"]
CMD ["npm", "start"]
