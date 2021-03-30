const exception = require('../../../middlewares/catchException');

import Job from '../../../models/Job';

const create = async (req, res) => {
  try {
    const { body } = req;

    const job = await Job.create(body);

    return res.status(200).json(job);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = create;
