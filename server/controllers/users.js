var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        res.send(results);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        res.sendStatus(201).end();
      }
    });
  }
};
