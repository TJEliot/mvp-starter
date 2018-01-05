var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/users', function(req, res) {
  console.log('called the post function');
  console.log(`the req is `, req.body)
  items.updater(req.body.username, req.body.target, function(err, data) {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(data);
    }
  });
})
//////////////////////////////////////////
/*
sendPointsFunc
  if you have enough in your balance
    subtract from yours
    add to theirs
    add to your sent
    add to their received

*/
/////////////////////////////////////////

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

