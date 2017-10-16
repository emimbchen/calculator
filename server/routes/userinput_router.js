var express = require('express');
var router = express.Router();
var calculation = require('../modules/calculations.js');

//variables
var data = [];
var result;
var numOne;
var numTwo;
var operator;

//routes
router.post('/', function (req, res) {
    numOne = req.body.numberOne;
    numTwo = req.body.numberTwo;
    operator = req.body.operator;
    result = calculation(numOne, numTwo, operator);
    req.body.results = result;
    data.push(req.body);
    res.sendStatus(200);
});

router.get('/', sendSubmit);

function sendSubmit(req, res) {
    console.log('request for response made', calculation(numOne, numTwo, operator));
    res.send({
        result: result,
        history: data
    });
}

module.exports = router;