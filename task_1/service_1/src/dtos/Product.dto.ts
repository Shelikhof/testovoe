import Joi from "joi";

export interface ProductCreateDTO {
  name: string;
  plu: number;
}

export const ProductCreateSchema = Joi.object<ProductCreateDTO>({
  name: Joi.string().required(),
  plu: Joi.number().required(),
});
