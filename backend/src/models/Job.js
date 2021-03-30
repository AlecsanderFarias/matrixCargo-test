const mongoose = require('mongoose');
const paginate = require('../config/mongoose-paginate');

const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: {
      country: { type: String },
      state: { type: String },
      complement: { type: String },
    },
    remote: { type: String, default: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

JobSchema.plugin(paginate);

module.exports = mongoose.model('Job', JobSchema);
