const exception = require('../../../middlewares/catchException');

const Job = require('../../../models/Job');

const list = async (req, res) => {
  try {
    const { active, page, perPage, filter } = req.query;

    const options = {
      limit: perPage || 10,
      page,
    };

    const query = {};

    if (filter) query.name = { $regex: name, $options: 'i' };

    if (typeof active === 'boolean') {
      query.active = active;
    }

    const plans = await Plan.paginate(query, options);

    return res.status(200).json(plans);
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = list;
