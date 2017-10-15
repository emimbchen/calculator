var express = require('express');
var bodyParser = require('body-parser');
var calculation = require('./modules/calculations.js');
var app = express();
var port = 5000;

var data = [];
var result;
var numOne;
var numTwo;
var operator;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port ', port);
});

app.post('/userinput', function(req, res){
    numOne = req.body.numberOne;
    numTwo = req.body.numberTwo;
    operator= req.body.operator;
    result = calculation(numOne, numTwo, operator);
    req.body.results = result;
    data.push(req.body);
    res.sendStatus(200);
});

app.get('/userinput', sendSubmit);

function sendSubmit(req, res){
    console.log('request for response made', calculation(numOne, numTwo, operator) );
    res.send({
        result: result,
        history: data
    });
}


