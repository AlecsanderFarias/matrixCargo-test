const yup = require('../lib/yup');

module.exports = yup.object().shape({
  order: yup
    .string()
    .oneOf(['des', 'asc'])
    .default('asc'),
  sort: yup
    .string()
    .default('createdAt'),
  page: yup.number().integer().min(1).default(1),
  perPage: yup.number().integer().min(1).default(10)
});
