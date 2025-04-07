const Joi = require("joi");

const chessValidation = Joi.object({
  title: Joi.string().min(5).max(30).required(),
  description: Joi.string().min(10).max(500).required(),
  imageUrl: Joi.string().uri().required(),
  videoUrl: Joi.string().uri(),
  created_by: Joi.string().required(),
});

const ValidateMoment = (req, res, next) => {
  const { error } = chessValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = ValidateMoment;
