var express = require('express');
var bodyParser = require('body-parser');
var userinputRouter = require('./routes/userinput_router.js');
var app = express();
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));
app.use('/userinput', userinputRouter);

app.listen(port, function(){
    console.log('listening on port ', port);
});




