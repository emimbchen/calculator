var express = require('express');
var bodyParser = require('body-parser');
var calculation = require('./modules/calculations.js');
var app = express();
var port = 5000;

var data = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port ', port);
});

app.post('/userinput', function(req, res){
    data.push(req.body);
    var numOne = req.body.numberOne;
    var numTwo = req.body.numberTwo;
    var operator= req.body.operator;
    res.sendStatus(200);
});

