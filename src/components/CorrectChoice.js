import React from 'react';

//Using stateless Functional components
function CorrectChoice(props){
    return(
    <div>
        {props.checkedValue === props.correctAnswer ? "Correct":"Wrong"}
    </div>);
}

export default CorrectChoice;