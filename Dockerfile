# based on https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/
# use current node LTS
FROM node:14.18.0-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]