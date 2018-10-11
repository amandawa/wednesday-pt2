import React from 'react';

// class PollQuestion extends React.Component{
//     render(){
//         return (<h2>{this.props.text}</h2>);
//     }
// }

function PollQuestion(props){
    return(<h2>{props.text}</h2>);
}

export default PollQuestion;