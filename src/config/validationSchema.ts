import * as Joi from '@hapi/joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'staging', 'production')
    .default('local'),
  PORT: Joi.number().default(3000),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
});
