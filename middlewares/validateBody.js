const { heroShema } = require('../validationShemas/heroShema');
const { Hero, Power } = require('../models/index');

module.exports.validateBody = async (req, res, next) => {
  try {
    const { body } = req;
    const result = await heroShema.validate(body);

    const modelFields = Object.keys(Hero.rawAttributes).concat('powers');
    const filtredBody = {};
    Object.keys(body).forEach(key => {
      if (modelFields.includes(key)) {
        filtredBody[key] = body[key];
      }
    });
    req.body = filtredBody;
    next();
  } catch (error) {
    next(error);
  }
};
