FROM node:18.12.1-alpine AS builder

ARG ENV=staging
ENV BUILD_ENV=$ENV

WORKDIR /app

COPY . .

RUN yarn && \
    yarn build:${BUILD_ENV}

FROM node:18.12.1-alpine

ARG ENV=staging
ENV BUILD_ENV=$ENV

WORKDIR /app

COPY --from=builder /app/apps/server-builds/ /app/apps/server-builds/
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/package.json .

CMD [ "sh", "-c", "yarn serve:${BUILD_ENV}" ]
