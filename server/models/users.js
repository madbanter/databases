var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        throw error;
      } else {
        callback(null, results);
      }
    });
  },
  create: function (user, callback) {
    var username = user.username || '';
    var sqlCommand = `INSERT INTO users (name) VALUES ('${username}')`;
    db.query(sqlCommand, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Username inserted');
        callback(null, result);
      }
    });
  }
};
