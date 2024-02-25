const { Hero, Power } = require('../models');
const NotFoundError = require('../errors/NotFoundError')

module.exports.createOne = async (req, res, next) => {
  try {
    const { body, file, powers } = req;
    const hero = await Hero.create(body);
    if (powers && powers.length) {
      await hero.addPowers(powers)
      }
    if (file) {
      await hero.createImage({ imagePath: file.filename });
    }
    res.status(201).send({ data: hero });
  } catch (error) {
    next(error);
  }
};

module.exports.updateOne = async (req, res, next) => {
  try {
    const {
      body,
      file,
      params: { heroId },
      powers,
    } = req;
    const updatedHero = await Hero.update(
      { ...body },
      {
        where: {
          id: Number(heroId),
        },
        returning: true,
      }
    );
    if (file) {
      const image = await updatedHero.createImage({ imagePath: file.filename });
    }
    if (powers) {
      await updatedHero.addPowers(powers);
    }
    res.status(200).send({ data: updatedHero });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const { pagination } = req;
    const heroes = await Hero.findAll({
      ...pagination,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.status(200).send({ data: heroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getOneWithPowers = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const heroWithPowers = await Hero.findAll({
      where: {
        id: Number(heroId),
      },
      include: [
        {
          model: Power,
        },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (heroWithPowers.length) {
      res.status(200).send({ data: heroWithPowers });
    } else {
      throw new NotFoundError('hero does not exist');
    }
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOne = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const hero = await Hero.findByPk(heroId);
    if (hero) {
      await hero.destroy();
      res.status(204).send();
    }else{
      throw new NotFoundError('hero does not exist');
    }
  } catch (error) {
    next(error);
  }
};
