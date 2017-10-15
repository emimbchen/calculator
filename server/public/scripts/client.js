console.log('js reporting for duty');

$(document).ready(inQuery);

function inQuery() {
    console.log('jq reporting for duty');
    getHistory();
    $('.numbers').on('click', 'button', numberClick);
    $('.operator').on('click', 'button', pickOp);
    $('#submit').on('click', submit);
    $('#reset').on('click', resetAll);
}

var numOne = '';
var numTwo = '';
var operator = 'empty';

//assign 2 button's data to a variable
//writes each number on DOM
function numberClick(){
    if (operator === 'empty'){
        numOne += $(this).data('value');
        $('#numOne').text(numOne);
        console.log(numOne);
    }
    else if (operator !== 'empty'){
        numTwo += $(this).data('value');
        $('#numTwo').text(numTwo);
        console.log(numTwo);
    }
}

//sets operator data to var
//writes operator on DOM
function pickOp(){
    operator = $(this).data('value');
    $('#operator').text(operator);
    console.log(operator);
}

//submits data to server
function submit(){
    $.ajax({
        method: "POST",
        url: "/userinput",
        data: {
            numberOne: numOne,
            numberTwo: numTwo,
            operator: operator
        }
    })
    .done(function (response){
        console.log('You did such a great job :)');
        getresults();
        
    });

}
//recieves calculation from server
//posts on DOM
function getresults(){
$.ajax({
    method: "GET",
    url: "/userinput"
})
.done(function(response){
    console.log(response);
    $("#results").text(" = " + response.result);
    appendHistory(response.history);
})
.fail(function(msg, status){
    console.log('everythings broken :(');
});

}

//reset function
function resetAll(){
   numOne = '';
   numTwo = '';
   operator = 'empty';
   $("#numOne").text('');
   $("#numTwo").text('');
   $("#operator").text('');
   $("#results").text('');

}

function getHistory() {
    $.ajax({
        method: "GET",
        url: "/userinput"
    })
        .done(function (response) {
            console.log(response.history);
            console.log('recieved some awesome data');
            appendHistory(response.history);
        })
        .fail(function (msg, status) {
            console.log('everythings broken :(');
        });

}

function appendHistory(data){
    $('#history').empty();
    for( var i = 0; i < data.length; i++){
        $('#history').prepend('<p>'+ data[i].numberOne + " " + data[i].operator + " " + data[i].numberTwo +" = "+ data[i].results +'</p>');
    }
}