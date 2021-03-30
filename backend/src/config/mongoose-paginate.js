const mongoosePaginate = require('mongoose-paginate-v2');

mongoosePaginate.paginate.options = {
  limit: 10,
  page: 1,
  customLabels: {
    docs: 'data',
    totalDocs: 'total',
  },
};

module.exports = mongoosePaginate;
