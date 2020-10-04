import React from 'react';
import Button from './ButtonComponent'
import { performCalculation } from './../lib/CalculatorLogic'

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
    
    charIsNumber(c) {
        return !isNaN(parseInt(c, 10));
    }

    shouldAddToOutput(c) { return c === "+/-"  || c === '.' || this.charIsNumber(c) }
 
    handleButtonEvent(event) {
        if (this.shouldAddToOutput(event)) 
        {
            let output = this.state.output;
            if (this.state.inputCompleted || output == "0") output = "";
            output = (event === "+/-") ? String(Number(this.state.output) * -1) : (output + event)
            this.setState({ output: output, inputCompleted: false });
        }
        else
        {
            if (event === "=") {
                let operations = this.state.operationsList;
                operations.push(this.state.output);

                let output = performCalculation(operations)

                this.setState({ output: output, operationsList: [] });
            } 
            else if (event === "AC") {
                this.setState({ output: "0", operationsList: [] });
            }
            else {
                let operations = this.state.operationsList;
                operations.push(this.state.output);
                operations.push(event);
                this.setState({ inputCompleted: true });
            }
        }
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
                        <Button text="÷" clickHandler={(event) => this.handleButtonEvent(event)} className="operator-button"/>
                    </div>
                    <div className="calculator-row">
                        <Button text="1" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="2" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="3" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="x" clickHandler={(event) => this.handleButtonEvent(event)} className="operator-button" />
                    </div>
                    <div className="calculator-row">
                        <Button text="4" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="5" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="6" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="-" clickHandler={(event) => this.handleButtonEvent(event)} className="operator-button" />
                    </div>
                    <div className="calculator-row">
                        <Button text="7" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="8" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="9" clickHandler={(event) => this.handleButtonEvent(event)} />
                        <Button text="+" clickHandler={(event) => this.handleButtonEvent(event)}  className="operator-button"/>
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