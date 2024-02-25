const { Power } = require('../models/index');

module.exports.getPowers = async (req, res, next) => {
  try {
    const {
      body: { powers },
    } = req;
    if (powers && powers.length) {
      const powersArray = [];
      for (const power of powers) {
        let powerInstanse = await Power.findOne({
          where: {
            powerType: power,
          },
        });
        if (powerInstanse) {
          powersArray.push(powerInstanse);
        } else {
          const newPower = await Power.create({
            powerType: power,
          });
          powersArray.push(newPower);
        }
      }

      req.powers = powersArray;
    }
    next();
  } catch (error) {
    next(error);
  }
};
