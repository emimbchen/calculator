function calculator( numone, numtwo, operator) {
    var result= 0;
    if(operator === "add"){
        result = numone + numtwo;
    }
    else if (operator === "subtract"){
        result = numone - numtwo;
    }
    else if (operator === "mult"){
        result = numone * numtwo;
    }
    else if (operator === "divide"){
        result = numone / numtwo;
    }
    return result;
}

module.exports = calculator;