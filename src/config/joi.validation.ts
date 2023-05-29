import * as Joi from 'joi';

export const joiValidation = Joi.object({
  PORT: Joi.string().default('3030'),
  DB_URL: Joi.string().required(),
})
