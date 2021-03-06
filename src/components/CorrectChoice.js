import React from 'react';

//Using stateless Functional components
function CorrectChoice(props){
    if (props.checkedValue === props.correctAnswer) {
        var c = 'green';
    } else {
        var c = 'red';
    }
    console.log("checkedValue: ", props);
    console.log("correctAnswer: ", props.correctAnswer);
    return(
    <div style={{color:c}}>
        {props.checkedValue === props.correctAnswer ? "Correct":"Wrong"}
    </div>);
}

export default CorrectChoice;