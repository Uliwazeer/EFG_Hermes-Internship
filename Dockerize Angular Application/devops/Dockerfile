# first stage of building angular image
FROM node:alpine3.20 as build 
RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/
RUN npm install 
COPY . /app/
RUN npm run build --prod

# final stage
FROM nginx:alpine
COPY --from=build /app/dist/helpdesk /usr/share/nginx/html 
