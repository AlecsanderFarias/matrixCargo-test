const exception = require('../../../middlewares/catchException');

import Job from '../../../models/Job';

const get = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);

    if (!job) {
      return res.status(401).json({
        error: 'Job not found.',
      });
    }

    return res.status(200).json(job);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = get;
