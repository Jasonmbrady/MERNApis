import React from "react";

const Multi = ({ string, color, background }) => {
    let type = "";
    let style = { "color": color, "background": background }


    if (isNaN(string)) {
        type = "word"
    } else {
        type = "number"
    }
    return (
        <h1 style={style}>The {type} is: {string}</h1>
    );
}
export default Multi;