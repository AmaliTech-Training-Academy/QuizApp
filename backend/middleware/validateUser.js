const Joi = require("joi");

// Password must contain at least one uppercase and lowercase letter, 
// contains at least one digit, at least one special character from the set @$!%*#?& and min(10)
function validateRegisterUser(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(50).required().email(),
    password: Joi.string()
      .min(10)
      .max(255)
      .required()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    const validationError = error.details[0].message;
    return res.status(400).json({ success: false, message: validationError });
  } else {
    return next();
  }
}

module.exports = validateRegisterUser;
