var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.log('error');
        res.sendStatus(500).end();
      } else {
        res.send(results);
      }
    });
  }, // a function which handles a get request for all messages


  post: function (req, res) {
    var message = req.body;
    var result = models.messages.create(message, (err, result) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        res.sendStatus(201).end();
      }
    });
  } // a function which handles posting a message to the database
};
