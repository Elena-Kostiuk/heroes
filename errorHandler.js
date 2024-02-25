const NotFoundError = require('./errors/NotFoundError');

module.exports.errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send({
      errors: {
        message: err.message,
      },
    });
  }
  res.status(500).send(err.message);
};
