import Joi from "joi";

export const LogCreateSchema = Joi.object({
  action: Joi.string().required(),
  plu: Joi.number().required(),
  shopId: Joi.number().optional().allow(null),
});
