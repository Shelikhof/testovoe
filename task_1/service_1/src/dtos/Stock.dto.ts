import Joi from "joi";

export interface StockCreateDTO {
  shopId: number;
  productId: number;
  quantityOnShelf: number;
  quantityInOrder: number;
}

export const StockCreateSchema = Joi.object<StockCreateDTO>({
  shopId: Joi.number().required(),
  productId: Joi.number().required(),
  quantityOnShelf: Joi.number().required(),
  quantityInOrder: Joi.number().required(),
});

export interface StockUpdateDTO {
  quantityOnShelf?: number;
  quantityInOrder?: number;
}
