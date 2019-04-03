FROM node:8

#app directory inside the image
WORKDIR /usr/src/roshambo-web

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source, expose the port & run.
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]