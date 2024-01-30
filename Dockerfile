FROM node:21.6.1

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "pnpm","run","dev" ]