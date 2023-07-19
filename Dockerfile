FROM node:current-alpine as build
LABEL author="Rakesh Dhariwal"
LABEL tag="Rakesh Portfolio"
WORKDIR /app
RUN npm install yarn
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:1.19-alpine 
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80 443
