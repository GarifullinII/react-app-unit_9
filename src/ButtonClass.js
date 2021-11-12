import React from "react";

class ButtonClass extends React.Component {

    constructor() {
        super();

        this.state = {
            buttonText : "Click me"
        }
    };

    handleClick = () => {
        this.setState({ buttonText : "I click a button" })
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.buttonText}
            </button>
        )
    }
}

export default ButtonClass;