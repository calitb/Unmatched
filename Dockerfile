FROM arm32v7/node:20.9.0

LABEL maintainer="Carlos Thurber B."

ENV NODE_ENV production
EXPOSE 3000

WORKDIR /usr/app

COPY . ./
RUN yarn && npx expo export -p web && yarn global add serve

CMD npx serve dist --single
