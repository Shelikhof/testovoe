FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY .env .env

RUN echo $DATABASE_URL

RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]