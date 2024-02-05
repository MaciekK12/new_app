FROM node:21.6.1

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json ./

RUN pnpm i

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "pnpm","run","dev" ]