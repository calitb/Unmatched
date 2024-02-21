FROM arm32v7/node:20.9.0

LABEL maintainer="Carlos Thurber B."

ENV NODE_ENV production
EXPOSE 3000

WORKDIR .

COPY . ./
RUN yarn && yarn global add serve && npx expo export -p web

CMD npx serve dist --single
