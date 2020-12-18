var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM messages', (err, results) => {
      if (err) {
        throw error;
      } else {
        callback(null, results);
      }
    });
  }, // a function which produces all the messages

  create: function (message, callback) {
    var username = message.username || '';
    var roomname = message.roomname || '';
    var text = message.text || '';
    var mysqlCommand = `INSERT INTO messages (username, roomname, text) VALUES (${username}, ${roomname}, ${text})`;
    db.query(mysqlCommand, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('Record inserted');
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
