import React from 'react';

//Using stateless Functional components
function CorrectChoice(props){
    if (props.checkedValue === props.correctAnswer) {
        var c = 'green';
    } else {
        var c = 'red';
    }
    return(
    <div style={{color:c}}>
        {props.checkedValue === props.correctAnswer ? "Correct":"Wrong"}
    </div>);
}

export default CorrectChoice;