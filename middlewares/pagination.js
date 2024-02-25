module.exports.pagination = async (req, res, next) => {
  try {
    const {
      query: { page },
    } = req;
    const limit = 5;
    req.pagination = {
      limit,
      offset: page ? (page - 1) * limit : 0,
      order: ['id'],
    };
    next();
  } catch (error) {
    next(error);
  }
};
