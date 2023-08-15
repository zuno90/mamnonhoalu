FROM node:16-alpine AS build

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN yarn
COPY . .
RUN yarn build

##############################

FROM node:16-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN yarn --only=production

COPY . .

COPY --from=build /usr/src/app/dist ./dist

CMD yarn start