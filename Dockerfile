FROM node:lts-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install -g @angular/cli
RUN npm install --force
COPY . .
RUN npm run build -k
EXPOSE 4200
CMD ["ng", "serve"]
