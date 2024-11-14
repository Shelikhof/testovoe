import { type Express } from "express-serve-static-core";
import { createApp } from "../..";
import db from "../../db";
import request from "supertest";
import { log } from "console";

describe("Product controller", () => {
  let app: Express;
  let code: number;
  let name: string;

  beforeAll(async () => {
    app = await createApp();
    code = Math.floor(Math.random() * (1000000 - 0 + 1)) + 0;
    name = "Banan";
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  describe("POST /products", () => {
    it("should create a product", async () => {
      const mockData = {
        name: name,
        plu: code,
      };

      const res = await request(app).post("/products/add").send(mockData);

      expect(res.status).toBe(201);
    });

    it("should create a product", async () => {
      const mockData = {
        name: name,
        plu: code,
      };

      const res = await request(app).post("/products/add").send(mockData);

      expect(res.status).toBe(400);
      expect(res.body.message).toBe("Product with this code already exists");
    });
  });

  describe("GET /products", () => {
    it("should return all products", async () => {
      const res = await request(app).get("/products");
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
    });

    it("should return all products", async () => {
      const res = await request(app).get(`/products?plu=${code}`);
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body[0].plu).toBe(code);
    });
  });
});
