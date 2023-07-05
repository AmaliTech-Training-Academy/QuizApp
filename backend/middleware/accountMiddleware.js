const Joi = require("joi");

function validateAccountSettings(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(50).required().email,
    contact: Joi.string().min(10).max(20),
    location: Joi.string().max(150),
    gender: Joi.string().valid("male", "female").required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const validationError = error.details[0].message;
    return res.status(400).json({ success: false, message: validationError });
  } else {
    return next();
  }
}

module.exports = validateAccountSettings;
