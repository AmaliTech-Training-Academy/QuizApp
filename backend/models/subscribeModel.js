const mongoose = require("mongoose");
const Joi = require("joi");

const subscribeSchema = new mongoose.Schema({
    email: String
});

const subscribed = mongoose.model("Subscribe", subscribeSchema);
module.exports = subscribed;




function subscribe(req, res) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email()
  });

  const { error } = schema.validate(req.body.email);

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    res.status(400).json({ success: true, message: errorMessages });
  } else {
    res.status(200).json({ success: true, message: "Email submitted successfully" });
  }
}

module.exports = subscribe
