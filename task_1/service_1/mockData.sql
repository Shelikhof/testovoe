-- Вставка 10 магазинов
INSERT INTO "Shop" ("name") VALUES
  ('Shop 1'),
  ('Shop 2'),
  ('Shop 3'),
  ('Shop 4'),
  ('Shop 5'),
  ('Shop 6'),
  ('Shop 7'),
  ('Shop 8'),
  ('Shop 9'),
  ('Shop 10');

-- Вставка 10 товаров
INSERT INTO "Product" ("plu", "name") VALUES
  (10001, 'Product 1'),
  (10002, 'Product 2'),
  (10003, 'Product 3'),
  (10004, 'Product 4'),
  (10005, 'Product 5'),
  (10006, 'Product 6'),
  (10007, 'Product 7'),
  (10008, 'Product 8'),
  (10009, 'Product 9'),
  (10010, 'Product 10');

-- Вставка остатков для 10 товаров в 10 магазинах
-- Для товара "Product 1"
INSERT INTO "Stock" ("productId", "shopId", "quantityOnShelf", "quantityInOrder") VALUES
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 1'), 100, 50),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 2'), 200, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 3'), 150, 20),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 4'), 180, 25),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 5'), 130, 10),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 6'), 120, 40),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 7'), 110, 35),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 8'), 160, 50),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 9'), 170, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10001), (SELECT id FROM "Shop" WHERE "name" = 'Shop 10'), 140, 20);

-- Для товара "Product 2"
INSERT INTO "Stock" ("productId", "shopId", "quantityOnShelf", "quantityInOrder") VALUES
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 1'), 110, 60),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 2'), 180, 40),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 3'), 140, 25),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 4'), 160, 20),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 5'), 150, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 6'), 120, 35),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 7'), 130, 45),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 8'), 200, 50),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 9'), 180, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10002), (SELECT id FROM "Shop" WHERE "name" = 'Shop 10'), 110, 20);

-- Для товара "Product 3"
INSERT INTO "Stock" ("productId", "shopId", "quantityOnShelf", "quantityInOrder") VALUES
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 1'), 200, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 2'), 190, 40),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 3'), 160, 35),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 4'), 150, 45),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 5'), 120, 25),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 6'), 130, 50),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 7'), 140, 60),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 8'), 180, 20),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 9'), 170, 30),
  ((SELECT id FROM "Product" WHERE "plu" = 10003), (SELECT id FROM "Shop" WHERE "name" = 'Shop 10'), 200, 40);
