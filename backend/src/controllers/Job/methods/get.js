const exception = require('../../../middlewares/catchException');

const get = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    exception(error);
    return res.status(500).json(error);
  }
};

module.exports = get;
