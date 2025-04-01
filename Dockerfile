
ARG PORT=3000
ARG API_URL=http://localhost:5000

ARG NODE_VERSION=20
FROM node:${NODE_VERSION}
WORKDIR /app

COPY package.json package-lock.json /app/
RUN #npm install

COPY . /app




LABEL author="Artem Stakhovski s27297@pjwstk.eu.pl"
LABEL version="1.0.0"
LABEL date_creation="01.04.2025"
LABEL opis="to jest frontend applikacji"


RUN useradd -m appuser && chown -R appuser:appuser ./
USER appuser
EXPOSE ${PORT}

#ENV PORT=3000
ENV API_URL=${API_URL}

CMD [ "npm","run","dev"]
