import React from 'react';
import Button from './ButtonComponent'
import { performCalculation, shouldAddToOutput, isOperator } from './../lib/CalculatorLogic'

class CalculatorComponent extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = {
            output: "0",
            operationsList: [],
            inputCompleted: false
        }
    }

    handleButtonEvent(event) {
        if (shouldAddToOutput(event)) {
            this.handleNumericInput(event);
        } else {
            if (event === "=") { this.handleEqualsFunction(); }
            else if (event === "AC") { this.handleReset(); }
            else if (isOperator(event)) { this.handleOperator(event); }
            else { throw "Invalid operator!"; } 
        }
    }

    handleNumericInput(event) {
        this.setState((state, props) => {
            let output = state.output;
            if (state.inputCompleted || output == "0") output = "";
            output = (event === "+/-") ? String(Number(output) * -1) : (output + event)
            return { output: output, inputCompleted: false };
        });
    }

    handleEqualsFunction() {
        this.setState((state, props) => {
            let operations = state.operationsList.slice();
            operations.push(state.output);
            let output = performCalculation(operations);
            return { output: output, operationsList: [] }
        });
    }

    handleReset() {
        this.setState({ output: "0", operationsList: [] });
    }

    handleOperator(operator) {
        this.setState((state, props) => {
            let opList = state.operationsList.slice();
            opList.push(state.output);
            opList.push(operator);
            return { operationsList: opList, inputCompleted: true };
        });
    }
    
    render() {
        return (
            <div className="calculator-container">

                <div className="calculator-column">
                    <div className="calculator-row">
                        <div className="calculator-display">
                            <span className="calculator-display-text">{this.state.output}</span>
                        </div>
                    </div>
                    <div className="calculator-row">
                        <Button text="AC" clickHandler={(event) => this.handleButtonEvent(event)} className="special-button"/>
                        <Button text="+/-" clickHandler={(event) => this.handleButtonEvent(event)} className="special-button"/>
                        <Button text="%" clickHandler={(event) => this.handleButtonEvent(event)} className="special-button"/>
                        <Button text="÷" clickHandler={(event) => this.handleButtonEvent(event)} />
                    </div>
                    <div className="calculator-row">
                        <Button text="1" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="2" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="3" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="x" clickHandler={(event) => this.handleButtonEvent(event)} />
                    </div>
                    <div className="calculator-row">
                        <Button text="4" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="5" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="6" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="-" clickHandler={(event) => this.handleButtonEvent(event)} />
                    </div>
                    <div className="calculator-row">
                        <Button text="7" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="8" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="9" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="+" clickHandler={(event) => this.handleButtonEvent(event)} />
                    </div>
                    <div className="calculator-row">
                        <Button text="0" width="91" clickHandler={(event) => this.handleButtonEvent(event)}  borderBottom="left" />
                        <Button text="." clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="=" clickHandler={(event) => this.handleButtonEvent(event)} className="operator-button" borderBottom="right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CalculatorComponent;