# Fetching the minified node image on alpine linux
FROM node:alpine as base
# Setting up the work directory
WORKDIR /koty

# Copying all the files in our project
COPY package.json package-lock.json /koty/
RUN npm install
#RUN rm -rf node_modules && npm install&& yarn cache clean
COPY . /koty

CMD [ "npm","run","dev" ]

# Exposing server port
EXPOSE 3000