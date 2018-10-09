const express = require('express'),
      fs = require('fs');
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mysql = require('mysql'),
      config = require('./config/DB'),
      https = require('https'),
      http = require('http'),
      app = express()
      ;
      
app.use(express.static( './public/'));
app.use(bodyParser.json());
      
const brain = require("brain.js"),
      network = new brain.NeuralNetwork()

// console.log(config)
var connection = mysql.createConnection(config);

var data = [];

connection.connect();
 
connection.on('err', function(err) {
  console.log(err)
})
let trainedNet;
app.post('/getResult', function(req, res){

  connection.query('SELECT * FROM survey_data', function (err, results, fields) {
    if (err) throw err;

    results.forEach(function(item, key) {
      var train_data = {
        "input" : JSON.parse(item.input),
        "output" : JSON.parse(item.output)
      }
      data.push(train_data)
    });
    //console.log("data", data) 
    //console.log("req.body", req.body)
    
    network.train(data)
    trainedNet = network.toFunction();
    const result = trainedNet(req.body)
    console.log(result);
      // res.json(req)
    res.json(result)

  });
});


app.post('/postResult', function(req, res){
  // console.log(req.body)
  var user_input = JSON.stringify(req.body.input)
  var user_output = req.body.output

  console.log(user_input)
  console.log(user_output)
  // var sql = "INSERT INTO survey_data (input, output) VALUES ('[3 ,4 ,5 ,4]', '{\"typeB\":1}')";
  var sql = "INSERT INTO survey_data (input, output) VALUES ('" + user_input + "','{" + user_output + ":1}')";
  console.log(sql)
  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    res.json("1 record inserted")
  });
})

// app.use(cors({origin: 'http://localhost:8888'}));
// var allowedOrigins = ['http://localhost', 'http://localhost:8080', 'http://localhost:3000'];
//     app.use(cors({
//       origin: function(origin, callback){
//         // (like mobile apps or curl requests)
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1){
//           var msg = 'The CORS policy for this site does not ' +
//                     'allow access from the specified Origin.';
//           return callback(new err(msg), false);
//         }
//         return callback(null, true);
//       }
//     }));

const server = app.listen(3000, function(){
  console.log('Listening on port ' + 3000);
});


