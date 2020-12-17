var db = require('../db');

module.exports = {
  getAll: function () {
    db.query('SELECT * FROM messages', queryArgs, (err, results) => {
      if (err) {
        throw error;
      } else {
        return results;
      }
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
