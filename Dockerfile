FROM node:16-alpine
WORKDIR /app
COPY ./package*.json ./
#RUN npm install -g @angular/cli
RUN npm install --force
COPY . .
RUN npm run build --prod
#EXPOSE 4200
#CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
FROM nginx:1.21.1-alpine
COPY --from=build /app/dist/my-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
