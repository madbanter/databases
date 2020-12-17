var db = require('../db');

module.exports = {
  getAll: function () {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) {
        throw error;
      } else {
        return results;
      }
    });
  },
  create: function (user) {
    var username = user.username || '';
    var sqlCommand = `INSERT INTO users (name) VALUES (${username})`;
    db.query(mysqlCommand, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Username inserted');
      }
    });
  }
};
