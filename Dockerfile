FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve"]
