const Joi = require("joi");

function validateMessage(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(1).max(50).required().email(),
    phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    subject: Joi.string().max(255).required(),
    message: Joi.string().max(1024).required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({success: false, message: error.details[0].message});
  }

  next();
}

module.exports = validateMessage;
