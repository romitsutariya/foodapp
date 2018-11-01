var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
const URL="mongodb://romit:romit123@ds227469.mlab.com:27469/k501"
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static("public/"));

 app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
 })
 app.get('/balance', function (req, res) {
    res.json({balance : Math.round(Math.random()*1000)});
 })
 app.post('/', function (req, res) {
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("k501");
         dbo.collection("food").insertOne(req.body, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      res.send("success");
 })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})