const express = require('express');
const HeroController = require('../controllers/Hero.controller');
const heroRouter = express.Router();
const { pagination } = require('../middlewares/pagination');
const upload = require('../middlewares/multer');
const { validateBody } = require('../middlewares/validateBody');
const { getPowers } = require('../middlewares/getPowers');

heroRouter.post('/',upload.single('image'),validateBody,getPowers,HeroController.createOne);
heroRouter.put('/:heroId', validateBody, getPowers, HeroController.updateOne);
heroRouter.get('/', pagination, HeroController.getAll);
heroRouter.get('/:heroId', HeroController.getOneWithPowers);
heroRouter.delete('/:heroId', HeroController.deleteOne);

module.exports = heroRouter;
