var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM users ORDER BY username', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var updater = function(sender, receiver, callback) {
  console.log('called the updater');
  console.log(`the sender is ${sender} and the receiver is ${receiver}`)
  var sqlSend = `UPDATE users SET balance = balance - 1, sent = sent + 1 WHERE users.username = "` + sender + `";`
  var sqlReceive = `UPDATE users SET balance = balance + 1, received = received + 1 WHERE users.username = "` + receiver + `";`
  connection.query(sqlSend, function(err, results) {
    if (err) {
      console.log(err)
      callback(err, null);
    } else {
      console.log(`updated ${sender}'s balance and sent`);
    }
  })
  connection.query(sqlReceive, function(err, results) {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log(`updated ${receiver}'s balance and received`);
      callback(null, results);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.updater = updater;