import React from 'react';

// class PollSubmitButton extends React.Component{
//     render(){
//         return (<button className = "btn btn-success">Go!</button>);
//     }
// }

function PollSubmitButton(props){
    return(<button onClick={props.handleClick} className = "btn btn-success">Go!</button>);
}

export default PollSubmitButton;