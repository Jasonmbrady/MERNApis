import React from "react";


const Number = ({ num }) => {
    let type = "";
    if (isNaN(num)) {
        type = "word"
    } else {
        type = "number"
    }
    return (
        <h1>The {type} is: {num}</h1>
    );
}
export default Number;