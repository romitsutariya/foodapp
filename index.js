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
    MongoClient.connect(URL, { useNewUrlParser: true },function(err, db) {
        if (err) throw err;
        var dbo = db.db("k501");
        dbo.collection("balance").findOne({}, function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
          });
      });
 })
 app.post('/', function (req, res) {
     console.log(req.body);
     req.body.balance = (parseInt(req.body.balance)-parseInt(req.body.amount));
    MongoClient.connect(URL, { useNewUrlParser: true },function(err, db) {
        if (err) throw err;
        var dbo = db.db("k501");
         dbo.collection("balance").updateOne({ u:'101' }, { $set: {amount:req.body.balance} }, function(err, res) {
         if (err) throw err;
         console.log("1 document updated");
         });
         dbo.collection("food").insertOne(req.body, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      res.send(req.body.balance+"");
 })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})