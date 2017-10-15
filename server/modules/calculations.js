function calculator( numone, numtwo, operator) {
    var result= 0;

    numone = parseInt(numone);
    numtwo = parseInt(numtwo);

    if(operator === "+"){
        result = numone+numtwo;
    }
    else if (operator === "-"){
        result = numone-numtwo;
    }
    else if (operator === "*"){
        result = numone*numtwo;
    }
    else if (operator === "/"){
        result = numone/numtwo;
    }
    return (result).toFixed(2);
}

module.exports = calculator;