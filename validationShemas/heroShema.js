const yup = require('yup');

module.exports.heroShema = yup.object({
  nickName: yup.string().required().max(200).min(1),
  realName: yup.string().required().max(200).min(1),
  originDescription: yup.string(),
  catchPhrase: yup.string(),
  powers: yup.array().of(yup.string()),
});
