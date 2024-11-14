для удобства запуск через docker

docker-compose up --build

после запуска (миграция таблиц и загрузка мок данных в бд):
RUN npx prisma migrate dev --name init && \
    npx prisma migrate dev --name init && \
    type sql-scripts/service_1.sql | psql -U postgres -d service_1 && \
    type sql-scripts/service_2.sql | psql -U postgres -d service_2

для запуска без docker настроить файлы .env в каждом из сервисов

тестовое задание.postman_collection.json - файл postman с эндпоинтами
schema.drawio (schema.jpg) - схема с описанием бд и эндпоинтами

В первом сервисе используется Express+TS, PrismaORM, Joi для валидации DTO
6 эндпоинтов:

Создание товара
POST http://localhost:8080/products/add
{
    "name": "pivo",
    "plu": 12318
}

Получение товара с параметрами plu, name
GET http://localhost:8080/products?plu=12311&name=pivo

Создание остатка
POST http://localhost:8080/stocks/add
{
    "shopId": 1,
    "productId": 1,
    "quantityOnShelf": 20,
    "quantityInOrder": 30
}

Получение остатка с параметрами shop_id, plu, quantityOnShelfFrom (от кол-ва товаров на полках), quantityOnShelfTo (до кол-ва товаров на полках), quantityInOrderFrom (от кол-ва товаров в заказе), quantityInOrderTo (до кол-ва товаров в заказе)
GET http://localhost:8080/stocks/?shop_id=1&plu=123&quantityOnShelfFrom=60&quantityOnShelfTo=200&quantityInOrderFrom=51&quantityInOrderTo=100

Увеличение остатка
PATCH http://localhost:8080/stocks/1/increase
{
    "quantityInOrder": 10,
    "quantityOnShelf": 10
}

Уменьшение остатка
http://localhost:8080/stocks/1/decrease
{
    "quantityInOrder": 10,
    "quantityOnShelf": 10
}

Во втором сервисе используется Express+JS, PrismaORM, Joi для валидации DTO
2 эндпоинта:

Создание записи, используется первым сервисом
http://localhost:8081/logs/add
{
    "action": "stocks/decrease",
    "shopId": 1,
    "plu": 1000
}

Получение записей с параметрами plu, shop_id, action, from (дата от), to (дата до), limit, page
http://localhost:8081/logs/?plu=10001&limit=1&page=3&shop_id=2&action=stocks/decrease&from=2024-11-14&to=2024-11-15

Все action: 
  createProduct: "products/add" - добавление продукта
  createStock: "stocks/add" - добавление остатка
  increaseStock: "stocks/increase" - увеличение остатка 
  decreaseStock: "stocks/decrease" - уменьшение остатка