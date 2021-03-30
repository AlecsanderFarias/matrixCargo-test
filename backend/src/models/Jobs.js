const mongoose = require('mongoose');
const paginate = require('../config/mongoose-paginate');

const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    //create fields
  },
  { timestamps: true }
);

JobSchema.plugin(paginate);

module.exports = mongoose.model('Job', JobSchema);
