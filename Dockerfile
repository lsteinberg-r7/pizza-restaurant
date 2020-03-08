
FROM node:10.15.3

WORKDIR /usr/src/app

COPY . .
RUN npm i
RUN npm run build

CMD ["node", "dist/main.js"]
