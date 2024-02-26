FROM arm32v7/node:20.9.0 AS builder
LABEL maintainer="Carlos Thurber B."

ENV NODE_ENV production

WORKDIR /usr/app

COPY . ./
RUN yarn && npx expo export -p web

# -------

FROM arm32v7/node:20.9.0
LABEL maintainer="Carlos Thurber B."

EXPOSE 3000

WORKDIR /usr/app

COPY --from=builder --chown=node /usr/app/node_modules ./node_modules
COPY --from=builder --chown=node /usr/app/dist ./dist

RUN yarn global add serve

CMD npx serve dist --single
