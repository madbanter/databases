var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.log('error');
        res.sendStatus(500).end();
      } else {
        console.log(results);
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages


  post: function (req, res) {
    // res.json(req.body);
    var message = req.body;
    console.log(message);
    models.messages.create(message, (err, result) => {
      if (err) {
        res.sendStatus(500).end();
      } else {
        res.sendStatus(201).end();
      }
    });
  } // a function which handles posting a message to the database
};
