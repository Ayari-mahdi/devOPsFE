FROM node:16-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g @angular/cli
RUN npm install --force
COPY . .
RUN npm run build -k
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
