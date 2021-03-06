var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient;
var app = express();

//this  uel for  connectin mango
//const URL="mongodb://romit:romit123@ds227469.mlab.com:27469/k501"
const URL="mongodb://romit:romit123@ds141428.mlab.com:41428/k501"
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public/"));

 //this is for  loading first page   
 app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
 })


 //this is  for loading balance



 //this is for handling  post request
 app.post('/', function (req, res) {
     console.log(req.body);
     MongoClient.connect(URL, { useNewUrlParser: true },function(err, db) {
        if (err) throw err;
        var dbo = db.db("k501");
        dbo.collection("food").insertOne(req.body, function(err, result) {
            if (err) throw err;
            res.json({"message":result.insertedCount==1? "suceess":"fail"});
            db.close();
          });
      });
    

 })

const port = process.env.PORT || 3000;
//server configuration file
var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
