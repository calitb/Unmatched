FROM arm32v7/node:20.9.0-alpine
LABEL maintainer="Carlos Thurber B."

EXPOSE 3000

WORKDIR /usr/app

COPY node_modules ./node_modules
COPY dist ./dist

CMD npx serve dist --single
