import React from "react";

function ButtonF() {

    const [buttonF, setButtonF] = React.useState("Click me, please");

    function handleButton() {
        setButtonF("Yes, thank's");
    }

    return (
        <button onClick={handleButton}>
            {buttonF}
        </button>
    )
};

export default ButtonF;