FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g @angular/cli
RUN npm install --no-optional
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve"]
