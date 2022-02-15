const Joi = require('joi');

module.exports = Joi.object({
  task: Joi.string().required(),
  status: Joi.string().required(),
  created: Joi.string().required(),
}).messages({
   'any.required': '{#label} is required.',
   'string.base': '{#label} must be a string.',
});
