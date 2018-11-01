var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static("public/"));

 app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
 })
 app.post('/', function (req, res) {
     console.log(req.body);
    res.sendStatus(200);
 })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})