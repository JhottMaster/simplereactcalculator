function performCalculation(opList) {
    var index = 0;
    let left = Number(opList[index++]);
    while (index < opList.length) {
        let operator = opList[index++];
        let right = Number(opList[index++]);
        left = Number(performOperator(left, right, operator));
    }
    return left;
}

function performOperator(left, right, operator) {
    if (operator === "÷" ) return Number(left) / Number(right);
    if (operator === "x" ) return Number(left) * Number(right);
    if (operator === "-" ) return Number(left) - Number(right);
    if (operator === "+" ) return Number(left) + Number(right);
    return 'error';
}

function shouldAddToOutput(c) { 
    return c === "+/-"  || c === '.' || charIsNumber(c) 
}

function charIsNumber(c) {
    return !isNaN(parseInt(c, 10));
}

function isOperator(char) {
    return ['x', '÷', '+', '-'].includes(char);
}

export { performCalculation, shouldAddToOutput, isOperator };