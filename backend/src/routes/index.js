const job = require('../controllers/Job');

const routes = (app) => {
  app.use('/job', job);
};

module.exports = routes;
