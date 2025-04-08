ARG PORT=3000
ARG NODE_VERSION=alpine
FROM node:${NODE_VERSION}
RUN apk update && apk add shadow && apk add --no-cache bash  \
    && apk cache clean
WORKDIR /application
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .
LABEL author="Artem Stakhovski s27297@pjwstk.eu.pl"
LABEL version="1.0.5"
LABEL date_creation="01.04.2025"
LABEL opis="to jest frontend applikacji"
RUN mkdir .next
RUN adduser --system --no-create-home newuser

RUN mkdir -p .next && chmod -R 777 .next

USER newuser
EXPOSE ${PORT}

ARG APIURL=http://localhost:5000
ENV NEXT_PUBLIC_API_URL=$APIURL

CMD [ "npm","run","dev"]
