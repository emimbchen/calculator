console.log('js reporting for duty');

$(document).ready(inQuery);

function inQuery() {
    console.log('jq reporting for duty');
    $('.numbers').on('click', 'button', numberClick);
    $('.operator').on('click', 'button', pickOp);
    $('#submit').on('click', submit);
}

var numOne = 'empty';
var numTwo = 'empty';
var operator;

function numberClick(){
    if (numOne === 'empty'){
        numOne = $(this).data('value');
        console.log(numOne);
    }
    else if (numTwo === 'empty'){
        numTwo = $(this).data('value');
        console.log(numTwo);
    }
}

function pickOp(){
    operator = $(this).data('value');
    console.log(operator);
}

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
        console.log('Success. Good work.');
    });
}