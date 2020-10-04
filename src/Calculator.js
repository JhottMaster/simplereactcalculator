class Calculator
{
    performOperator(left, right, operator) {
        if (operator === "÷" ) return Number(left) / Number(right);
        if (operator === "x" ) return Number(left) * Number(right);
        if (operator === "-" ) return Number(left) - Number(right);
        if (operator === "+" ) return Number(left) + Number(right);
        return 'error';
    }

    performCalculation(opList) {
        var index = 0;
        let left = Number(opList[index++]);
        while (index < opList.length) {
            let operator = opList[index++];
            let right = Number(opList[index++]);
            left = Number(this.performOperator(left, right, operator));
        }
        return left;
    }

    buildOperatorList() {


    }
}

export default Calculator;