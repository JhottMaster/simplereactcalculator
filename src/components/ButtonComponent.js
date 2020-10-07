import React from 'react';
import './../index.css';
import { isOperator } from './../lib/CalculatorLogic';

class ButtonComponent extends React.Component 
{
    render() {
        let size = 40 + "px"
        let width = (this.props.width || size) + "px";
        let styleProps = {width: width, height: size };
        if (this.props.borderBottom === "right") { styleProps = { ...styleProps, borderBottomRightRadius: "5px" }; }
        if (this.props.borderBottom === "left") { styleProps = { ...styleProps, borderBottomLeftRadius: "5px" }; }
        let classes = this.props.className || ''
        classes += isOperator(this.props.text) ? ' operator-button' : ''

        return (
            <div className={"calculator-key " + classes } style={styleProps} 
                onClick={() => this.props.clickHandler(this.props.text)}>

                {this.props.text}
            </div>
        );
    }
}

export default ButtonComponent;