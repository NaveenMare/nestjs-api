FROM node

WORKDIR /work

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/main" ]