npm i
Настроить файл .env

Миграция таблиц
npx prisma migrate dev --name init

Генерация 1млн строк в бд
npx ts-node prisma/seed.ts

Эндпоинт
http://localhost:8082/user/fix