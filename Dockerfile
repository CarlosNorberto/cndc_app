FROM node:10.15.3 as build
WORKDIR /usr/src/app
COPY package.json package-lock.json
RUN npm install
COPY . .
RUN npm build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/front-end /usr/share/nginx/html



