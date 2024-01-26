import React from "react";

interface Prop{
    updateState? : () => void;
    symbol : string;
    dim : string;
}

function Button({updateState, symbol, dim} : Prop){
    const Style = {
        width : dim,
        height : dim
    };
    return <button className = "btn btn-outline-secondary d-flex justify-content-center align-items-center px-0" style = {Style} onClick = {updateState}> {symbol} </button>;
}

export default Button;